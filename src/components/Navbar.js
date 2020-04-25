import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Fight Covid
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
