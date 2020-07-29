import React from 'react'
import { action } from '@storybook/addon-actions'
import Chip from '@material-ui/core/Chip'

export default {
  title: 'Chip',
  component: Chip
}

export const Default = (theme) => {
  console.log(theme.name)
  console.log(theme.palette.primary.main)

  return (
    <div>
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
    </div>
  )
}
