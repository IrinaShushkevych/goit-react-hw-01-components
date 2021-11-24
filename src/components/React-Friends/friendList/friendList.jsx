import PropTypes from 'prop-types'
import s from './friendList.module.css'
import FriendItem from '../friendItem/friendItem'

function FriendList({ friendlist }) {
  return (
    <ul className={s.list}>
      {friendlist.map((el) => (
        <FriendItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friendlist: PropTypes.arrayOf(PropTypes.object),
}

export default FriendList
