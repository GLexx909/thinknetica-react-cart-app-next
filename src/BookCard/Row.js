import React from 'react'

const Row = ({label, children}) => {
  return (
    <div>
      <b>{ label }:</b>
      <i>{ children }</i>
    </div>
  )
}

export default Row
