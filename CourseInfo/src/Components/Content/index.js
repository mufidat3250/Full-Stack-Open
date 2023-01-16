import React from "react";
import Part from "../Part";
const Content = (props) => {
  const {parts} = props
  console.log(parts)
  return (
    <div>
      {parts.map((part, index)=> <Part part={part.name} exercises={part.exercises} key= {index}/>)}
    </div>
  );
};

export default Content;
