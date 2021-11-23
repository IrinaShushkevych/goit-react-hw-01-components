import PropTypes from 'prop-types'

function ProfileStats({ followers, views, likes }) {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers ?? 0}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views ?? 0}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes ?? 0}</span>
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
