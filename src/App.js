import React from 'react'
import Header from "./shared/Layout/Header";
import Footer from "./shared/Layout/Footer";
import ButtonToTop from "./ButtonToTop";
import BookCard from "./BookCard";

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <BookCard />
        <div style={{height: '900px'}}>___</div>
        <ButtonToTop />
        <Footer />
      </>
    )
  }
}

export default App
