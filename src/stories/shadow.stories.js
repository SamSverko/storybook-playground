import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  boxShadow: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    display: 'flex',
    height: '5rem',
    justifyContent: 'center',
    margin: '10px',
    width: '8rem'
  }
})

export default {
  title: 'Shadow',
  component: Box
}

export const Default = () => {
  const classes = useStyles()

  return (
    <div>
      <Box boxShadow={0} className={classes.boxShadow}>
        boxShadow={0}
      </Box>
      <Box boxShadow={10} className={classes.boxShadow}>
        boxShadow={10}
      </Box>
      <Box boxShadow={20} className={classes.boxShadow}>
        boxShadow={20}
      </Box>
      <Box boxShadow={30} className={classes.boxShadow}>
        boxShadow={30}
      </Box>
      <Box boxShadow={40} className={classes.boxShadow}>
        boxShadow={40}
      </Box>
    </div>
  )
}
