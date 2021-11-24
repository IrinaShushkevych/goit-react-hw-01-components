import PropTypes from 'prop-types'
import s from './profile.module.css'
import ProfileDescription from '../profileDescription/profileDescription'
import ProfileStats from '../profileStats/profileStats'

function Profile({ user }) {
  return (
    <div className={s.profile}>
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
