
import React, { PropTypes } from 'react'
import style from './userInfo.css'

const UserInfo = ({ userinfo }) => (
  <div className={style.userInfo}>
    <img
      src={userinfo.photo}
      alt='Avatar'
    />
    <div className='user-main-info'>
      <h1>
        <a href={`https://github.com/${userinfo.login}`}>
          {userinfo.username}
        </a>
      </h1>

      <ul className={style.userInfo}>
        <li>Repositórios: { userinfo.repos }</li>
        <li>Seguidores: { userinfo.followers }</li>
        <li>Seguindo: { userinfo.following }</li>
      </ul>

      <span>{userinfo.bio}</span>
    </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
