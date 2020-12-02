import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
function Header() {
  return (
    <AppBar position="sticky" style={{ backgroundColor: `black` }}>
      {/*    <Toolbar>
        <Grid container>
          <Grid item xl={6} md={6} lg={6} sm={12} xs={12} className="pad_16">
            <Heading>Pics Browser</Heading>
          </Grid>

          <Grid item xl={6} md={6} lg={6} sm={12} xs={12} className="pad_16">
            <SearchBar
              style={{
                border: `2px solid grey`,
                borderRadius: `24px`,
                height: `35px`,
              }}
              value={searchValue}
              onChange={(newValue) => filterResult(newValue)}
              onRequestSearch={() => filterResult(searchValue)}
            />
          </Grid>
        </Grid>
      </Toolbar> */}
    </AppBar>
  );
}

export default Header;
