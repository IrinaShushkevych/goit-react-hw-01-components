import PropTypes from 'prop-types'

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className="transaction-history__item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default TransactionHistoryItem
