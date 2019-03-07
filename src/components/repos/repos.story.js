import React from 'react'
import { storiesOf } from '@storybook/react'
import Repos from './index'

const stories = storiesOf('Repos', module)

stories.add('With title prop', () => (
  <div style={{ padding: 50 }}>
    <Repos title='Favoritos' />
  </div>
))

stories.add('With repos', () => (
  <div style={{ padding: 50 }}>
    <Repos
      title='Favoritos'
      repos={[{
        link: 'https://github.com/devfabiocicero',
        name: 'My Github page'
      }]}
    />
  </div>
))
