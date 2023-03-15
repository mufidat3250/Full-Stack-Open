import React from "react";

const Person = ({person, handleDelete, id}) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Person;
