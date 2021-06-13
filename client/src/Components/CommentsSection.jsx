import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CommentsButton from "./CommentButton";
import styles from "./style/CommentsSection.module.scss";
import useFetch from "../hooks/Fetcher";
import { getComments, getCommentByEmail } from "../commentsServices";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import CommentsModal from "./CommentsModal";

export default function CommentsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState(false);

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
    const response = await getCommentByEmail(data, data.email);
    console.log(response);
    if (response) {
      setDetails(response.data[0]);
      setOpenModal(true);
    }
  };

  return (
    <div className={styles.containerComment}>
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
          const { name, email, comment, date } = comm;
          return (
            <div key={index}>
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
      />
    </div>
  );
}
