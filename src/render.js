import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from "./App";

const book = {
  "title": "Economy of Stalin",
  "description": "Book about Economy of Stalin",
  "pages_count": 417,
  "language": "RU",
  "progress": 25,
  "cover": "https://ozon-st.cdn.ngenix.net/multimedia/1037906978.jpg",
  "author_id": 1,
  "min_price": 250,
  "desired_price": 500,
  "current_sum": 10000,
  "expected_sum": 200000
}

const author = {
  "id": 1,
  "name": "Valentin Katasonov",
  "email": "v.katasonov@ya.ru",
  "avatar": "https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg",
  "description": "Russian scientist and economist, doctor of economic Sciences."
}

const render = () => ReactDOMServer.renderToString(<App book={book} author={author}/>)

export default render
