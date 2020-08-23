import React from 'react'

const Footer = () => {
  return(
    <div style={style.container}>
      <div style={style.img_container}>
        <img style={style.img} src="https://im0-tub-ru.yandex.net/i?id=4a20ee9a3d10c4e69a7385ad3ea0581e&n=13" alt=""/>
      </div>
      <span style={style.title}>Книжный Сервис. Все права защищены </span>
    </div>
  )
}

export default Footer

const style = {
  container: {
    width: '100%',
    bottom: 0,
    display: 'flex',
    height: '30px',
    borderBottom: '2px solid black',
    backgroundColor: '#00BFFF'

  },
  img_container: {
    backgroundColor: '#00BFFF'
  },
  img: {
    width: '30px',
    height: 'auto',
    color: '#00BFFF'

  },
  title: {
    fontSize: '30px',
    fontWeight: '600'
  }
}
