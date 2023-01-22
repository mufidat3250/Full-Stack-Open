import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
const App = () => {

  const [persons, setPersons] = useState([])
  const [phoneRecord, setPhoneRecord] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState('')

  useEffect(() => {  
    axios.get('http://localhost:3001/persons')
         .then((data)=> {
          setPersons([...data.data])
         })
  }, [])
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
      <Persons filteredData={filteredData}/>
    </div>
  );
};

export default App;
