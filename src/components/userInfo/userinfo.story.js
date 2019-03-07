import React from 'react'
import { storiesOf } from '@storybook/react'
import UserInfo from './index'

const stories = storiesOf('UserInfo', module)

stories.add('UserInfo Component', () => (
  <div style={{ padding: 50 }}>
    <UserInfo
      userinfo={{
        username: 'Fábio Cícero',
        photo: 'https://avatars0.githubusercontent.com/u/14243236?v=4',
        login: 'devfabiocicero',
        repos: 10,
        followers: 5,
        following: 10
      }}
    />
  </div>
))
