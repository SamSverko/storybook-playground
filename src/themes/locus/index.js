import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  name: 'Locus',
  palette,
  shadows,
  typography
})

export default theme
