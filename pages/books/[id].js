import React from 'react'

import AuthorsList from "../../src/AuthorsList";
import DiscountModal from "../../src/DiscountModal";
import Form from "../../src/Form";
import Row from "../../src/BookCard/Row";
import Button from "../../src/BookCard/Subscribe/Button";
import Cover from "../../src/Cover";
import Tags from "../../src/Tag";
import SubscribeForm from "../../src/BookCard/Subscribe/Form";
import withLoader from "../../src/HOC/withLoader";
import { fetchBook } from "../../src/utils/airtable";
import Link from "next/link";


const Book = ({ book }) => {

  if (!book)
    return <div>Empty book</div>

  const { title, description, authors, min_price, desired_price, cover, subscribers_count } = book
  const subscribersLimitToPopular = 10

  return(
    <div>
      <Link href='/' as={`/`} >
        <button>НАЗАД</button>
      </Link>
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
    </div>
  )
}

export async function getServerSideProps({ params }) {

  return {
    props: {
      book: await fetchBook(params.id)
    }
  }
}

export default withLoader(Book)


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
