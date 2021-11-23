import PropTypes from 'prop-types'
import TransactionHistoryItem from './transactionHistoryItem'

function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="transaction-history__header">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((el) => (
          <TransactionHistoryItem
            type={el.type}
            amount={el.amount}
            currency={el.currency}
            key={el.id}
          />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
}

export default TransactionHistory
