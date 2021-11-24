import PropTypes from 'prop-types'
import s from './friendItem.module.css'

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.text}>{name}</p>
    </li>
  )
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}

export default FriendItem
