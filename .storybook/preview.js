import React from 'react'
import { addDecorator } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'

import Locus from '../src/themes/locus'
import RetroWave from '../src/themes/retro-wave'
import Garden from '../src/themes/garden'

const globalTheme = (storyFn) => {
  const MUIDefault = useTheme()
  const themes = {
    'Material UI': MUIDefault,
    Locus: Locus,
    Garden: Garden,
    RetroWave: RetroWave
  }
  const themeNames = Object.keys(themes)
  const theme = select('Theme', themeNames, themeNames[0], 'Themes')

  return <ThemeProvider theme={themes[theme]}>{storyFn()}</ThemeProvider>
}

addDecorator(withKnobs)
addDecorator(globalTheme)
