import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CommentsButton from "./CommentButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./style/CommentsSection.module.scss";
import useFetch from "../hooks/Fetcher";
import { getComments, getCommentById } from "../commentsServices";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import CommentsModal from "./CommentsModal";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

export default function CommentsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState(false);

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    appBar: {
      backgroundColor: "#73c2fb",
    },
  }));

  const classes = useStyles();

  const [
    retrivedComments,
    loadRetrivedComments,
    reFetchetrivedComments,
    setRetrivedComments,
  ] = useFetch(getComments.bind(null), false);

  const formatDate = (date) => {
    const initialDate = new Date(1970, 0, 1); // Epoch
    initialDate.setSeconds(date._seconds);
    const formatedDate = moment(initialDate).format("DD MMM YYYY");
    return formatedDate;
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleOpenEdit = async (data) => {
    const response = await getCommentById(data);
    if (response) {
      setDetails(response.data);
      setOpenModal(true);
    }
  };

  return (
    <div className={styles.containerComment}>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <FormattedMessage id="CommentsSection.crud" defaultMessage="CRUD" />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.headerComments}>
        <h1>
          <FormattedMessage
            id="CommentsSection.Comments"
            defaultMessage="Comments"
          />
        </h1>
        <CommentsButton handleOpen={handleOpen} />
      </div>
      {retrivedComments ? (
        retrivedComments.map((comm, index) => {
          const { name, comment, date } = comm;
          return (
            <div key={index}>
              <Backdrop
                className={classes.backdrop}
                open={loadRetrivedComments}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <Paper className={styles.paperStyle}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar
                      name={name}
                      alt={name}
                      title={name}
                      round
                      maxInitials={2}
                    />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <div className={styles.headerComments}>
                      <h4 style={{ margin: 0, textAlign: "left" }}>{name} </h4>

                      <IconButton
                        className={styles.containerCommentBtn}
                        onClick={() => handleOpenEdit(comm)}
                        aria-label="add to shopping cart"
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                    <p style={{ textAlign: "left" }}>{comment}</p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                      <FormattedMessage
                        id="CommentsSection.Posted"
                        defaultMessage="posted"
                      />{" "}
                      {date ? formatDate(date) : ""}
                    </p>
                  </Grid>
                </Grid>
                <Divider />
              </Paper>
            </div>
          );
        })
      ) : (
        <div />
      )}

      <CommentsModal
        setDetails={setDetails}
        openModal={openModal}
        setOpenModal={setOpenModal}
        details={details}
        reFetchetrivedComments={reFetchetrivedComments}
        loadRetrivedComments={loadRetrivedComments}
        setRetrivedComments={setRetrivedComments}
      />
    </div>
  );
}
