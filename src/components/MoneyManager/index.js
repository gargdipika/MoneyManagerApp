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
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    transactionList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

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
    const {title, amount, type, balance, income, expenses} = this.state
    const newTransaction = {
      title,
      amount,
      type,
      id: uuidv4(),
    }
    let changedIncome
    let changedBalance
    let changedExpenses
    if (type === 'INCOME') {
      changedIncome = income + parseInt(amount)
      changedBalance = balance + parseInt(amount)
      changedExpenses = expenses
    } else if (type === 'EXPENSES') {
      changedExpenses = expenses + parseInt(amount)
      changedBalance = balance - parseInt(amount)
      changedIncome = income
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      balance: changedBalance,
      income: changedIncome,
      expenses: changedExpenses,
      title: '',
      amount: '',
      type: 'INCOME',
    }))
  }

  onDeleting = (id, type, amount) => {
    if (type === 'INCOME') {
      this.setState(prevState => ({
        transactionList: prevState.transactionList.filter(
          eachTransaction => eachTransaction.id !== id,
        ),
        balance: prevState.balance - parseInt(amount),
        income: prevState.income - parseInt(amount),
        expenses: prevState.expenses,
      }))
    } else {
      this.setState(prevState => ({
        transactionList: prevState.transactionList.filter(
          eachTransaction => eachTransaction.id !== id,
        ),
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - parseInt(amount),
        income: prevState.income,
      }))
    }
  }

  render() {
    const {
      title,
      type,
      amount,
      transactionList,
      income,
      balance,
      expenses,
    } = this.state

    console.log(transactionList)
    return (
      <div className="background-container">
        <div className="welcome-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="span-style">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} balance={balance} expenses={expenses} />
        <div className="last-container">
          <form
            className="form-style"
            onSubmit={this.onSubmitTransactionDetails}
          >
            <h3>Add Transactions</h3>
            <label htmlFor="title" className="margin">
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
            <label htmlFor="amount" className="margin">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              className="margin"
              onChange={this.onChangeAmountElement}
              value={amount}
            />
            <label htmlFor="SELECT" className="margin">
              TITLE
            </label>
            <select
              className="margin"
              onChange={this.onChangeSelectElement}
              value={type}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.optionId}
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
            <ul className="history-item-container">
              <li className="history-item">
                <p className="paragraph">Title</p>
                <p className="paragraph">Amount</p>
                <p className="paragraph">Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  onDeleting={this.onDeleting}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
