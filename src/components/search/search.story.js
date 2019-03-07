import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Search from './index'

const stories = storiesOf('Search', module)

stories.add('Search Component', () => (
  <div style={{ padding: 50 }}>
    <Search
      handleSearch={action('Searching any user')}
      isDisabled={false}
    />
  </div>
))

stories.add('With disabled prop', () => (
  <div style={{ padding: 50 }}>
    <Search
      handleSearch={action('Searching any user')}
      isDisabled
    />
  </div>
))
