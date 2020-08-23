import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      companyDividends: props.min_price * 0.1,
      currentSum: props.min_price
    }

    this.moneyInputRef = React.createRef()
    this.handleSum = this.handleSum.bind(this)
  }

  componentDidMount() {
    this.moneyInputRef.current.focus()
  }

  handleSum(e) {
    this.setState({
      currentSum: Math.floor(e.target.value),
      companyDividends: Math.floor(e.target.value * 0.1)
    })
  }

  render() {
    const { min_price, desired_price } = this.props

    return(
      <form onSubmit={e => e.preventDefault()} style={style.form}>
        <b>Купить:</b>
        <input ref={this.moneyInputRef} type="text" name="moneyInput" placeholder='тестовый input'/>

        <input onChange={this.handleSum} type="range" min={min_price} max={desired_price} value={this.state.currentSum}/>
        <b>{this.state.currentSum}</b>
        <button type="submit">Оплатить</button>
        { this.state.currentSum >= min_price && <b>{this.state.companyDividends}</b> }
      </form>
    )
  }
}

export default Form

const style = {
  form: {
    margin: '15px 0',
    padding: '15px 0 15px 10px',
    border: '2px solid',
    backgroundColor: '#ccffcc'
  }
}
