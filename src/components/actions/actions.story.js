import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Actions from './index'

const stories = storiesOf('Actions', module)

stories.add('Actions Component', () => (
  <div style={{ padding: 50 }}>
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')}
    />
  </div>
))
