import React, { useState, useEffect } from "react";
import { getPictures } from "../services/FetchPictures";
import StackGrid, { transitions } from "react-stack-grid";
import styled from "styled-components";
import NotFoundImage from "../images/picture.svg";
import { Grid } from "@material-ui/core";
import PreviewDialog from "./PreviewImage";
import SearchBar from "material-ui-search-bar";
import NoPic from "../images/pictures.svg";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Footer from "./Footer";
import Header from "./Header";
const { scaleDown } = transitions;
const ThumbnailContainer = styled.span`
  margin: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  width: ${(props) => {
    return props.width ? props.width + "px" : "150px";
  }};
  height: ${(props) => {
    return props.height ? props.height + "px" : "150px";
  }};
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const TitleDiv = styled.div`
  color: white;
  font-size: 10px;
  padding: 0px 8px;
`;
const SLImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: zoom-in;
`;
const NoImg = styled.div`
  color: black;
  font-size: 8px;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 24px;
  padding: 8px;
  font-weight: 600;
`;

const NoData = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export default function Picbrowser(props) {
  const [dataSet, setDataset] = useState([]);
  const [picsData, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [previewData, setPreviewData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    getData();
    setSearchValue("");
  }, []);

  const getData = async () => {
    let pics = await getPictures();
    setDataset(pics);
    setData(pics);
  };
  const filterResult = (title) => {
    setSearchValue(title);
    let filteredArr = [];
    dataSet.forEach((item) => {
      if (item.title.toLowerCase().includes(title.toLowerCase()))
        filteredArr.push(item);
    });
    setData(filteredArr);
  };
  const displayPicture = (data) => {
    setPreviewData(data);
    setOpenDialog(true);
  };
  return (
    <div>
      {openDialog ? (
        <PreviewDialog
          data={previewData}
          dialogAction={(dt) => setOpenDialog(dt)}
          open={true}
        ></PreviewDialog>
      ) : null}
      <AppBar position="sticky" style={{ backgroundColor: `black` }}>
        <Toolbar>
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
        </Toolbar>
      </AppBar>

      {picsData && picsData.length ? (
        <div className="visual-root">
          <StackGrid
            columnWidth={150}
            gutterWidth={20}
            gutterHeight={20}
            monitorImagesLoaded={true}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            duration={600}
          >
            {picsData.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <ThumbnailContainer
                    width={data.thumbnailWidth}
                    height={data.thumbnailHeight}
                    onClick={(evt) => displayPicture(data)}
                  >
                    {data.thumbnailUrl &&
                    data.thumbnailUrl.startsWith("http") ? (
                      <SLImg
                        src={data.thumbnailUrl}
                        alt="no thumbnail image"
                      ></SLImg>
                    ) : (
                      <div>
                        <img src={NotFoundImage} alt="no thumbnail image"></img>
                        <NoImg>No thumbnail found</NoImg>
                      </div>
                    )}
                  </ThumbnailContainer>
                  <TitleDiv>{data.title}</TitleDiv>
                </React.Fragment>
              );
            })}
          </StackGrid>
        </div>
      ) : (
        <NoData>
          <img src={NoPic} style={{ width: `50%` }}></img>
          <div>No Pics found!! Search by different keyword</div>
        </NoData>
      )}

      <Footer></Footer>
    </div>
  );
}
