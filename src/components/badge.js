import React from 'react'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'

const BadgeComponent = ({ ...allOtherProps }) => {
  return (
    <Badge {...allOtherProps}>
      <MailIcon />
    </Badge>
  )
}

export default BadgeComponent
