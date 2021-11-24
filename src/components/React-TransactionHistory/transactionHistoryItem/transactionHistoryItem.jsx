import PropTypes from 'prop-types'
import s from './transactionHistoryItem.module.css'

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  )
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default TransactionHistoryItem
