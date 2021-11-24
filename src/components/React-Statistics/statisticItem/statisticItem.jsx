import PropTypes from 'prop-types'
import s from './statisticItem.module.css'

function getColor() {
  const color = Math.random().toString(16).slice(2, 8)
  return `#${color}`
}

function StatisticItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: getColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  )
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StatisticItem
