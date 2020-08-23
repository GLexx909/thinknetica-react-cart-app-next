import React from 'react'
import { render,fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import UserInfo from "./UserInfo";
import AuthContext from "./AuthContext";

test('renders email in a card', () => {
  const userAgent = {
    email: 'yandex@ya.ru',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    avatarUrl: 'https://a.wattpad.com/cover/197248780-256-k684621.jpg'
  }

  const { getByText } = render(
    < AuthContext.Provider value={userAgent}>
      <UserInfo/>
    </AuthContext.Provider>
  )
  expect(getByText('yandex@ya.ru')).toBeInTheDocument()
})


test('renders sign_in in a card', () => {
  const userAgent = {

  }

  const { getByRole, getByText } = render(
    < AuthContext.Provider value={userAgent}>
      <UserInfo/>
    </AuthContext.Provider>
  )
  expect(getByText('Войти')).toBeInTheDocument()
  expect(getByRole('button')).toBeInTheDocument()
})
