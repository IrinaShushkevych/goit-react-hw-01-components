import PropTypes from 'prop-types'
import s from './statistics.module.css'
import StatisticList from '../statisticList/statisticList'

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <StatisticList stats={stats} />
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
}

export default Statistics
