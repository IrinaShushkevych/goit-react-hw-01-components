import PropTypes from 'prop-types'
import FriendItem from './friendItem'

function FriendList({ friendlist }) {
  return (
    <ul className="friend-list">
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
