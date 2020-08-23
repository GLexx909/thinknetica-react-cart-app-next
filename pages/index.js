import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AuthContext from "../src/AuthContext";
import App from "../src/App";
import { fetchData, fetchBook } from '../src/utils/airtable'

const currentUser = {
  email: 'yandex@ya.ru',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  avatarUrl: 'https://a.wattpad.com/cover/197248780-256-k684621.jpg'
}

export default function Home({books}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < AuthContext.Provider value={{au: currentUser, books: books}}>
        <App />
      </AuthContext.Provider>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      books: await fetchData()
    }
  }
}
