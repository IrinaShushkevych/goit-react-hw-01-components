import PropTypes from 'prop-types'
import ProfileDescription from './profileDescription'
import ProfileStats from './profileStats'

function Profile({ user }) {
  return (
    <div className="profile">
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <ProfileStats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
}
export default Profile
