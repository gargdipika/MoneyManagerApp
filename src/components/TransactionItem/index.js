// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails

  return (
    <li className="history-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}

export default TransactionItem
