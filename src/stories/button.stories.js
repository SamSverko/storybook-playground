import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import Button from '@material-ui/core/Button'

import ThemeKnob from '../knobs/theme'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

export const Default = () => (
  <ThemeKnob>
    <Button color='primary' onClick={action('onClick')} variant='contained'>
      Primary
    </Button>
    <Button color='secondary' onClick={action('onClick')} variant='contained'>
      Secondary
    </Button>
  </ThemeKnob>
)
