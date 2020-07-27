import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { select } from "@storybook/addon-knobs";
import RetroWave from "../themes/retro-wave";
import Garden from "../themes/garden";

export default ({ children }) => {
  const MUIDefault = useTheme();
  const themes = {
    "Material UI": MUIDefault,
    Garden: Garden,
    RetroWave: RetroWave,
  };
  const themeNames = Object.keys(themes);

  const theme = select("Theme", themeNames, themeNames[0], "Themes");

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
