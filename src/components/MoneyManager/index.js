import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {title: '', amount: '', type: 'Income', transactionList: []}

  onChangeTitleElement = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountElement = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelectElement = event => {
    this.setState({type: event.target.value})
  }

  onSubmitTransactionDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      title,
      amount,
      type,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
    }))
  }

  render() {
    const {title, amount, transactionList} = this.state

    console.log(transactionList)
    return (
      <div className="background-container">
        <div className="welcome-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="last-container">
          <form
            className="form-style"
            onSubmit={this.onSubmitTransactionDetails}
          >
            <h3>Add Transactions</h3>
            <label htmlFor="TITLE" className="margin">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="margin"
              onChange={this.onChangeTitleElement}
              value={title}
            />
            <label htmlFor="AMOUNT" className="margin">
              AMOUNT
            </label>
            <input
              type="text"
              id="title"
              placeholder="AMOUNT"
              className="margin"
              onChange={this.onChangeAmountElement}
              value={amount}
            />
            <label htmlFor="SELECT" className="margin">
              TITLE
            </label>
            <select className="margin" onChange={this.onChangeSelectElement}>
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.displayText}
                  key={eachTransaction.optionId}
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <button className="button-style" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h3>History</h3>
            <div className="history-item-container">
              <li className="history-item">
                <h4>Title</h4>
                <h4>Amount</h4>
                <h4>Type</h4>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
