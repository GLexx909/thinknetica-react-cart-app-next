import React from 'react'
import ReactDOM from 'react-dom'

class DiscountModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div style={style.discount}>
        <a onClick={() => this.toggle()}>Условия подписки</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={style.overlay}>
              <div style={style.body}>
                За подписку автор лично подпишет ваш экземпляр книги
                <button onClick={() => this.toggle()}>Закрыть</button>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </div>
    )
  }
}

export default DiscountModal

const style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  },
  discount: {
    marginTop: '10px',
    cursor: 'pointer',
    border: '2px solid black',
    textAlign: 'center'
  }
}
