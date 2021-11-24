import PropTypes from 'prop-types'
import s from './profileStats.module.css'

function ProfileStats({ followers, views, likes }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers ?? 0}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views ?? 0}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes ?? 0}</span>
      </li>
    </ul>
  )
}

ProfileStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}
export default ProfileStats
