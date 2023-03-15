import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { create, Delete, getAll, update } from "./services/personsService";
import ErrorMesssage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [phoneRecord, setPhoneRecord] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState({ error: null, success: null });

  useEffect(() => {
    getAll().then((res) => setPersons(res.data));
  }, []);
  console.log(persons)
  const filteredData = persons.filter((person)=>person.name.includes(filter));
  
  const filterSearch = (e) => {
    setFilter(e.target.value);
  };
  const handleChange = ({ target }) => {
    setPhoneRecord({
      ...phoneRecord,
      [target.name]: target.value,
    });
  };
  const updatePhoneBook = (newName, personObject) => {
    let notice = `${phoneRecord.name} is already in the phone book, replace the old one with new one?`;
    // change the existing phone number

    update(newName._id, personObject).then((updatedperson) => {      
      console.log(updatedperson, 'setPerson' , newName, updatedperson.id, newName.id)
       setPersons(
         persons.map((person) => (person.id === newName.id ? updatedperson : person))
       );
       setPhoneRecord({ name: "", number: "" });
       setMessage({ ...message, success: notice });
       setTimeout(() => {
         setMessage({ ...message, success: null });
       }, 5000);
     }).catch((error)=> {
       setMessage({...message, error:error.message})
       setTimeout(() => {
         setMessage({...message, error:null});
       }, 5000);
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let newPerson = {
      ...phoneRecord,
      name: phoneRecord.name,
      number: phoneRecord.number,
    };

    const newName = persons.find((person) => person.name === newPerson.name);
    if (newName) {
      updatePhoneBook(newName, newPerson);
    } else {
      create(newPerson).then((res) =>{       
        setPersons(res.data);
        setMessage({ ...message, success: `Added${newPerson.name}`});
        setPhoneRecord({ name: "", number: "" });
        setTimeout(() => {
          setMessage({ ...message, success: null });
        }, 5000);
      });
    }
  };

  const handleDelete = (id) => {
    const checkPhoneId = persons.find((person) => person._id === id);
    console.log(checkPhoneId, 'checkperson Id')
    let message = `Delete ${checkPhoneId.name}?`;
    if (window.confirm(message) === true)
      Delete(id)
        .then((res) =>
          setPersons(persons.filter((person) => person.id !== checkPhoneId.id))
        )
        .catch((error) => {
          console.log(error);
          setMessage({ ...message, error: error.message });

          setTimeout(() => {
            setMessage({ ...message, error: null });
          }, 5000);
        });
  };

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      {message.error !== null ? (
        <ErrorMesssage message={message.error} />
      ) : message.success !== null ? (
        <SuccessMessage message={message.success} />
      ) : (
        ""
      )}
      <FilterForm handleSearch={filterSearch} />
      <h2>Phonebook</h2>
      <PersonForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        phoneRecord={phoneRecord}
      />
      <h2>Numbers</h2>
      <Persons filteredData={filteredData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
