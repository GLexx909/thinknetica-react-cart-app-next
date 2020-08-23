import React from 'react'
import UserInfo from "../../UserInfo";
import style from '../../../styles/Header.module.css'

const Header = () => {
  return(
    <div className={style.container}>
      <div>
        <img className={style.img} src="https://cdn.dribbble.com/users/1860775/screenshots/6550972/s_kitap_logo.png" alt=""/>
        <span className={style.title}>Книжный Сервис</span>
      </div>
      <UserInfo />
    </div>
  )
}

export default Header
