import React, { useContext } from 'react'
import AuthContext from "../AuthContext";

import AuthorsList from "../AuthorsList";
import DiscountModal from "../DiscountModal";
import Form from "../Form";
import Row from "./Row";
import Button from "./Subscribe/Button";
import Cover from "../Cover";
import Tags from "../Tag";
import List from "../SimilarBooks/List";
import SubscribeForm from "./Subscribe/Form";
import withLoader from "../HOC/withLoader";

const BookCard = () => {
  const books = useContext(AuthContext).books;

  if (!books)
    return <div>Empty book</div>

  const book = books[0]
  const book_id = book.id

  const otherBooks = books.filter( book => book.id !== book_id)

  const { title, description, authors, min_price, desired_price, cover, subscribers_count } = book
  const subscribersLimitToPopular = 10

  return(
    <div>
      <div style={style.container}>
        <div>
          <Cover url={cover} />
          <Tags isPopular={subscribers_count >= subscribersLimitToPopular} />
          <DiscountModal />
        </div>
        <div>
          <Row label='Название'>{title}</Row>
          <Row label='Описание'>{ description }</Row>
          <Row label='Минимальная цена'>{min_price}р.</Row>
          <Row label='Список авторов:'><AuthorsList authors={authors}/></Row>
          <SubscribeForm min_price={min_price} desired_price={desired_price}/>
          <Button label="Подписаться на книгу"/>
          <Form />
        </div>
      </div>
      <List books={otherBooks}/>
    </div>
  )
}

export default withLoader(BookCard)

const style = {
  container: {
    display: 'flex'
  },
  popular_block: {
    backgroundColor: 'gold',
    textAlign: 'center'
  },
  discount: {
    marginTop: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    textAlign: 'center'
  }
}
