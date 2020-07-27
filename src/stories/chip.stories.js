import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import Chip from '@material-ui/core/Chip'

import ThemeKnob from '../knobs/theme'

export default {
  title: 'Chip',
  component: Chip,
  decorators: [withKnobs]
}

export const Default = () => (
  <ThemeKnob>
    <Chip
      clickable
      color='primary'
      label='Primary clickable'
      onClick={action('onClick')}
      onDelete={action('onDelete')}
    />
    <Chip
      clickable
      color='secondary'
      label='Secondary clicable'
      onClick={action('onClick')}
      onDelete={action('onDelete')}
    />
  </ThemeKnob>
)
