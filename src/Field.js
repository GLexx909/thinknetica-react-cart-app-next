import React from 'react'

const Field = ({label, name, myInput}) => {
  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <input onChange={(e) => myInput(e)} name={ name } id={name} type="text"/>
    </div>
  )
}

export default Field
