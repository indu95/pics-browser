import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchBar from "material-ui-search-bar";
import styled from "styled-components";

const Heading = styled.span`
  text-align: left;
  font-size: 24px;
  padding: 8px;
  font-weight: 600;
`;
function Header(props) {
  const [searchValue] = useState("");

  return (
    <AppBar position="sticky" style={{ backgroundColor: `black` }}>
      <Toolbar>
        <Grid container>
          <Grid item xl={6} md={6} lg={6} sm={12} xs={12} className="pad_16">
            <Heading>Pics Browser</Heading>
          </Grid>

          <Grid item xl={6} md={6} lg={6} sm={12} xs={12} className="pad_16">
            <SearchBar
              className="search_bar"
              value={searchValue}
              onChange={(newValue) => props.searchCallBack(newValue)}
              onCancelSearch={() => props.clearSearch()}
              onRequestSearch={(val) => {
                props.searchCallBack(searchValue);
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
