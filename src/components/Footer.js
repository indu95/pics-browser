import styled from "styled-components";
import { Grid } from "@material-ui/core";
import React from "react";
import LinkedIn from "../images/linkedin.svg";
import Github from "../images/github.png";
import Instagram from "../images/instagram.svg";
import Tooltip from "@material-ui/core/Tooltip";
import { Constants } from "../Constants";
const FooterImg = styled.img`
  width: 18px;
  margin-left: 8px;
  cursor: pointer;
`;
const FooterGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <div className="footer">
      <FooterGrid container>
        <FooterGrid item xs={6} justify="flex-end">
          &copy; UI Designed and Developed by Indu
        </FooterGrid>
        <FooterGrid item xs={6} justify="flex-start">
          <Tooltip title="LinkedIn">
            <FooterImg
              src={LinkedIn}
              onClick={() => {
                window.open(Constants.socialMediaUrls.linkedIn, "_blank");
              }}
            ></FooterImg>
          </Tooltip>
          <Tooltip title="GitHub" className="git">
            <FooterImg
              src={Github}
              onClick={() => {
                window.open(Constants.socialMediaUrls.github, "_blank");
              }}
            ></FooterImg>
          </Tooltip>
          <Tooltip
            title="Instagram"
            onClick={() => {
              window.open(Constants.socialMediaUrls.instagram, "_blank");
            }}
          >
            <FooterImg src={Instagram}></FooterImg>
          </Tooltip>
        </FooterGrid>
      </FooterGrid>
    </div>
  );
}

export default Footer;
