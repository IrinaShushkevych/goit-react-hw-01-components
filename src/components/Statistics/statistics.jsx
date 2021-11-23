import PropTypes from 'prop-types'
import StatisticList from './statisticList'

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <StatisticList stats={stats} />
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
}

export default Statistics
