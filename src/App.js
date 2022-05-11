import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "material-ui/core";

import divingMemoris from "./images/memorise.jpg";
const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="primary">
        <Typography variant="H2" align="center"></Typography>
        <img src={divingMemoris} alt="memorise" height="60" />
      </AppBar>
    </Container>
  );
};

export default App;
