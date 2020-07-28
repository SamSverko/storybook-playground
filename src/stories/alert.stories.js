import React from 'react'
import Alert from '@material-ui/lab/Alert'

export default {
  title: 'Alert',
  component: Alert
}

export const Default = () => (
  <div>
    <Alert severity='error'>This is an error alert — check it out!</Alert>
    <Alert severity='warning'>This is a warning alert — check it out!</Alert>
    <Alert severity='info'>This is an info alert — check it out!</Alert>
    <Alert severity='success'>This is a success alert — check it out!</Alert>
  </div>
)
