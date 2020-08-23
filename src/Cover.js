import React from 'react'

const Cover = ({url}) => {
  return (
    <div>
      <img style={style.img} src={ url } alt=""/>
    </div>
  )
}

export default Cover

const style = {
  img: {
    width: '200px'
  }
}
