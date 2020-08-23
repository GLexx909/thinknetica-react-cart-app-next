import React, { useState } from 'react'

const ButtonToTop = () => {

  const [ currentHeightPosition, setCurrentHeightPosition ] = useState(0);

  const handleScroll = () => {
    setCurrentHeightPosition(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  return (
    currentHeightPosition > 200 && (
      <a style={style.container} href='#'>
        <b style={style.text}>ВВЕРХ</b>
      </a>
    )
  )
}

export default ButtonToTop

const style = {
  container: {
    position: 'fixed',
    left: '50px',
    bottom: '100px',
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer'
  },
  text: {
    position: 'absolute',
    top: '35%'
  }
}
