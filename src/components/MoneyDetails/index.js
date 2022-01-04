// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {monetDetail} = props
  return (
    <ul className="unordered-list-container">
      <li className="list-item">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h6 className="heading-element">Your Balance</h6>
          <h3 className="money-item">RS 40000</h3>
        </div>
      </li>
      <li className="list-item color-income">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <h6 className="heading-element">Your Income</h6>
          <h3 className="money-item">RS 40000</h3>
        </div>
      </li>
      <li className="list-item color-expenses">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <h6 className="heading-element">Your Expenses</h6>
          <h3 className="money-item">RS 40000</h3>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
