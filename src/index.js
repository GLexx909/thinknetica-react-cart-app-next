import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import './index.css'
import AuthContext from "./AuthContext";

const currentUser = {
  email: 'yandex@ya.ru',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  avatarUrl: 'https://a.wattpad.com/cover/197248780-256-k684621.jpg'
}

ReactDOM.render(
  < AuthContext.Provider value={currentUser}>
    <App />
  </AuthContext.Provider>,
  document.getElementById('root')
)
