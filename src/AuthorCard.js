import React from 'react'

const AuthorCard = ( props ) => {

  if (!props.author)
    return <div>Empty author</div>

  const { email, avatar, description, name } = props.author

  const nameShow = name || 'Имя отсутствует'

  return(
    <div style={style.container}>
      <div><img style={ style.img } src={ avatar } alt=""/></div>
      <div>
        <div><b>Автор:</b> { nameShow }</div>
        <div><b>Описание:</b> { description }</div>
      </div>
    </div>
  )
}

export default AuthorCard

const style = {
  container: {
    display: 'flex',
    marginTop: '20px'
  },
  img: {
    width: '50px'
  }
}
