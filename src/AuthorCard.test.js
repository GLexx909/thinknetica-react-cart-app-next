import React from 'react'
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import AuthorCard from "./AuthorCard";

test('renders author in a card', () => {
  const author = {
    "id": 1,
    "name": "Valentin Katasonov",
    "email": "v.katasonov@ya.ru",
    "avatar": "https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg",
    "description": "Russian scientist and economist, doctor of economic Sciences."
  }

  const { getByText } = render(<AuthorCard author={author}/>)
  expect(getByText('Valentin Katasonov')).toBeInTheDocument()
})

test('renders an empty author in a card', () => {
  const { getByText } = render(<AuthorCard />)
  expect(getByText('Empty author')).toBeInTheDocument()
})
