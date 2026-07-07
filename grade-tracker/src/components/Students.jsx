import React from 'react'

const Students = (props) => {
  return (
    <>
    <p>student name is {props.name}</p>
    <p>student name is {props.age}</p>
    <p>student name is {props.email} </p>
    <p>student phn number {props.phn} </p>

    </>
  )
}

export default Students