import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "@material-ui/core/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button color="primary" onClick={action("clicked")} variant="contained">
    Hello Button
  </Button>
);
