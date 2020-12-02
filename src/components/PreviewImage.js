import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const SLCloseBtn = styled(CloseIcon)`
  float: right;
  color: black;
  cursor: pointer;
  margin: 8px;
`;

const SLDialogContent = styled(DialogContent)`
  min-height: 60vh;
  margin: 0px 16px;
  margin-bottom: 24px;
`;
const SLImg = styled.img`
  width: 100%;
  height: 100%;
`;

const TextGrid = styled(Grid)`
  padding: 16px;
`;

const TitleDiv = styled(Grid)`
  font-size: 24px;
  font-weight: 600;
`;
const Subdiv = styled.div`
  margin: 4px 0px;
`;
function PreviewImage(props) {
  const [open, setOpen] = useState(props.open);
  const [data, setdata] = useState(props.data);
  useEffect(() => {
    setdata(props.data);
  }, [props.data]);
  return (
    <div>
      <Dialog
        disableEnforceFocus={true}
        open={open}
        onClose={() => props.dialogAction(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          <SLCloseBtn
            onClick={() => {
              setOpen(false);
              props.dialogAction(false);
            }}
          >
            <IconButton />
          </SLCloseBtn>
        </DialogTitle>

        <SLDialogContent>
          <Grid container>
            <Grid item xl={8} md={8} lg={8} sm={12} xs={12}>
              <SLImg src={decodeURIComponent(data.pictureUrl)}></SLImg>
            </Grid>

            <TextGrid item xl={4} md={4} lg={4} sm={12} xs={12}>
              <TitleDiv>{data.title}</TitleDiv>
              <Subdiv> Author : {data.author}</Subdiv>
              <Subdiv> Width : {data.width}</Subdiv>
              <Subdiv> Height : {data.height}</Subdiv>
            </TextGrid>
          </Grid>
        </SLDialogContent>
      </Dialog>
    </div>
  );
}

export default PreviewImage;
