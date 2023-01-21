import { useState } from "react";
import FilterForm from "./components/FilterForm";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [phoneRecord, setPhoneRecord] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPerson = {
      ...phoneRecord,
      name: phoneRecord.name,
      number: phoneRecord.number,
    };
    if (persons.find((person) => person.name.includes(newPerson.name))) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }
  };
  const handleChange = ({target}) => {
    setPhoneRecord({
      ...phoneRecord,
      [target.name]: target.value,
    });
  };
  const handleSearch =(e)=>{
    setFilter(e.target.value)
  }
  const filteredData = persons.filter((person)=> person.name.includes(filter))

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <FilterForm handleSearch={handleSearch}/>
      <h2>Phonebook</h2>
     <PersonForm handleChange={handleChange} handleSubmit={handleSubmit} phoneRecord={phoneRecord}/>
      <h2>Numbers</h2>
      <Persons filteredPerson={filteredData}/>
    </div>
  );
};

export default App;
