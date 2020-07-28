import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'

export default {
  title: 'Button',
  component: Button
}

export const Default = () => (
  <div>
    <Button color='primary' onClick={action('onClick')} variant='contained'>
      Primary
    </Button>
    <Button color='secondary' onClick={action('onClick')} variant='contained'>
      Secondary
    </Button>
  </div>
)
