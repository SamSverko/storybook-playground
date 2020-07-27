import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Alert from '@material-ui/lab/Alert'

import ThemeKnob from '../knobs/theme'

export default {
  title: 'Alert',
  component: Alert,
  decorators: [withKnobs]
}

export const Default = () => (
  <ThemeKnob>
    <Alert severity='error'>This is an error alert — check it out!</Alert>
    <Alert severity='warning'>This is a warning alert — check it out!</Alert>
    <Alert severity='info'>This is an info alert — check it out!</Alert>
    <Alert severity='success'>This is a success alert — check it out!</Alert>
  </ThemeKnob>
)
