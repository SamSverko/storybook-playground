import React from 'react'
import Typography from '@material-ui/core/Typography'

export default {
  title: 'Typography',
  component: Typography
}

export const Default = () => (
  <div>
    <Typography variant='h1' component='h2'>
      h1. Heading
    </Typography>
    <Typography variant='h2'>h2. Heading</Typography>
    <Typography variant='h3'>h3. Heading</Typography>
    <Typography variant='h4'>h4. Heading</Typography>
    <Typography variant='h5'>h5. Heading</Typography>
    <Typography variant='h6'>h6. Heading</Typography>
    <Typography variant='subtitle1'>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant='subtitle2'>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant='body1'>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant='body2'>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant='button' display='block'>
      button text
    </Typography>
    <Typography variant='caption' display='block'>
      caption text
    </Typography>
    <Typography variant='overline' display='block'>
      overline text
    </Typography>
  </div>
)
