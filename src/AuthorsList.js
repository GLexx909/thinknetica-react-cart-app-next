import React from 'react'
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAllAuthors: false
    }
  }

  showAllAuthors() {
    this.setState({ showAllAuthors: true })
  }

  render() {

    if (!this.props.authors)
      return <div>Empty authors</div>

    const { authors }  = this.props
    const authorsLength = authors.length

    return(
      <div>
        <ul>
          {
            authors
              .slice(0, this.state.showAllAuthors ? authorsLength : 3)
              .map((author) => (
                <li style={style.li} key={author.id}><AuthorCard author={author}/></li>
              ))
          }
        </ul>

        { authorsLength > 3 && <button onClick={() => this.showAllAuthors()}>Показать всех авторов ({authorsLength})</button> }
      </div>
    )
  }
}

export default AuthorsList

const style = {
  li: {
    listStyleType: 'none'
  }
}
