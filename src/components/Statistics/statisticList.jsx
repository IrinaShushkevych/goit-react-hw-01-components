import PropTypes from 'prop-types'
import StatisticItem from './statisticItem'

function StatisticList({ stats }) {
  return (
    <ul className="stat-list">
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
