import React from 'react'

const Total = (props) => {
  console.log(props, 'total')
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

export default Total