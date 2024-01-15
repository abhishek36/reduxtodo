import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = ({ mode, setmode }) => {
  return (
    <>
      <AppBar position="static" color="error">
        <Toolbar>
          <Typography variant="h6">Redux todo</Typography>
          <Switch
            onChange={(e) => setmode(mode === "light" ? "dark" : "light")}
            color="warning"
            // sx={{ border: "1px solid white" }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
