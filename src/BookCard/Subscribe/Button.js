import React from 'react'

const Button = ({label}) => <button style={style.subscribe_button} >{label}</button>

export default Button

const style = {
  subscribe_button: {
    marginTop: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    textAlign: 'center'
  }
}
