import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Theme from "./Theme";

const App = () => {
  return (
    <Theme>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit">
            React Material Skeleton
          </Typography>
        </Toolbar>
      </AppBar>
    </Theme>
  );
};

export default App;
