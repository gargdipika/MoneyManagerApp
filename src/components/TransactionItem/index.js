// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleting} = props
  const {title, amount, type, id} = transactionDetails

  const onClickDeleteIcon = () => {
    onDeleting(id, type, amount)
  }

  return (
    <li className="history-item">
      <p className="paragraph">{title}</p>
      <p className="paragraph">RS. {amount}</p>
      <div className="delete-icon-container">
        <p className="paragraph2">{type}</p>
        <button
          type="button"
          className="button"
          onClick={onClickDeleteIcon}
          testid="delete"
        >
          <img
            className="delete-icon-style"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
