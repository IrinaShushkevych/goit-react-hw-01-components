import PropTypes from 'prop-types'
import s from './statisticList.module.css'
import StatisticItem from '../statisticItem/statisticItem'

function StatisticList({ stats }) {
  return (
    <ul className={s.list}>
      {stats.map((el) => (
        <StatisticItem
          key={el.id}
          label={el.label}
          percentage={el.percentage}
        />
      ))}
    </ul>
  )
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
}

export default StatisticList
