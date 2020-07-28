import React from 'react'
import BadgeComponent from '../components/badge'
import MailIcon from '@material-ui/icons/Mail'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Badge',
  component: BadgeComponent
}

export const Default = () => (
  <div>
    <BadgeComponent
      badgeContent={0}
      color='primary'
      onClick={action('onClick')}
      showZero={true}
    >
      <MailIcon />
    </BadgeComponent>
  </div>
)