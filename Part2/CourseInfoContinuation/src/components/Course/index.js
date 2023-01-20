import React from 'react'
import Content from '../Content'
import Header from '../Header'

const Course = ({course}) => {
  console.log(course)
  return (
    <div>
      {course.map((course, index)=>{
        console.log(course.parts)
        return  <>
        <Header title={course.name}/>
              <Content parts= {course.parts}/>
              </>
      })}
    </div>
  )
}

export default Course