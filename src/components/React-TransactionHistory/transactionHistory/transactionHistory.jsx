import PropTypes from 'prop-types'
import s from './transactionHistory.module.css'
import TransactionHistoryItem from '../transactionHistoryItem/transactionHistoryItem'

function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.header}>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
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
