import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      light: '#6aa3ff',
      main: '#0075ff',
      dark: '#004bcb',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#ffffff'
    },
    error: {
      light: '#ff5533',
      main: '#ea0000',
      dark: '#af0000',
      contrastText: '#ffffff'
    },
    warning: {
      light: '#ffe24b',
      main: '#f4b000',
      dark: '#bc8100',
      contrastText: '#000000'
    },
    info: {
      light: '#ae57ff',
      main: '#741fff',
      dark: '#2e00ca',
      contrastText: '#ffffff'
    },
    success: {
      light: '#64ff4f',
      main: '#00d308',
      dark: '#00a000',
      contrastText: '#000000'
    }
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
})
