import { createMuiTheme } from '@material-ui/core/styles'
import HUE from './locus.hue'

export default createMuiTheme({
  palette: {
    error: {
      contrastText: HUE.grey[0],
      dark: HUE.red[900],
      light: HUE.red[500],
      main: HUE.red[700]
    },
    primary: {
      contrastText: HUE.grey[0],
      dark: HUE.blue[900],
      light: HUE.blue[500],
      main: HUE.blue[700]
    },
    secondary: {
      contrastText: HUE.grey[0],
      dark: HUE.grey[900],
      light: HUE.grey[500],
      main: HUE.grey[700]
    }
  }
})
