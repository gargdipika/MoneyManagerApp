// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props
  return (
    <ul className="unordered-list-container">
      <li className="list-item">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="heading-element">Your Balance</p>
          <p testid="balanceAmount" className="money-item">
            RS {balance}
          </p>
        </div>
      </li>
      <li className="list-item color-income">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="heading-element">Your Income</p>
          <p testid="incomeAmount" className="money-item">
            RS {income}
          </p>
        </div>
      </li>
      <li className="list-item color-expenses">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="heading-element">Your Expenses</p>
          <p testid="expensesAmount" className="money-item">
            RS {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
