import React from 'react'

const Tags = ({isPopular}) => {
  return (
    <>
      {
        isPopular &&
        <div style={style.popular_block}>
          <i>Популярная книга</i>
        </div>
      }
    </>
  )
}

export default Tags

const style = {
  popular_block: {
    backgroundColor: 'gold',
    textAlign: 'center'
  }
}
