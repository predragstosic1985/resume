import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MessageIcon from "@material-ui/icons/Message";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import CommentsFormHeader from "./AdditionalComponents/CommentsFormHeader";
import { postComment, getComments } from "../commentsServices";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

export default function CommentsForm({ setDetails, details, setOpenModal }) {
  const classes = useStyles();

  const initState = {
    name: "",
    email: "",
    comment: "",
  };

  const [comment, setComment] = useState(details ? details : initState);

  const handleClose = () => {
    setDetails();
    setComment(initState);
    setOpenModal(false);
  };

  const submitComment = async () => {
    const response = await postComment(comment);
    if (response) {
      //   await reFetchetrivedComments();
      setOpenModal(false);
      setComment(initState);
    } else {
      console.log("err post");
    }
  };

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageIcon />
        </Avatar>
        <CommentsFormHeader />

        <form className={classes.form} noValidate>
          {/* <CommentsFormCheckBox /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleOnChange}
            label={
              <FormattedMessage
                id="CommentsForm.nameComment"
                defaultMessage="Name/Nickname"
              />
            }
            name="name"
            value={comment.name}
            autoComplete="off"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={comment.email}
            label={
              <FormattedMessage
                id="CommentsForm.email"
                defaultMessage="Email"
              />
            }
            name="email"
            onChange={handleOnChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            value={comment.comment}
            id="comment"
            label={
              <FormattedMessage
                id="CommentsForm.comment"
                defaultMessage="commnet"
              />
            }
            name="comment"
            onChange={handleOnChange}
            autoComplete="off"
            autoFocus
          />
          <ButtonGroup variant="contained" fullWidth>
            <Button autoFocus onClick={handleClose} color="default">
              <FormattedMessage
                id="CommentsForm.Cancel"
                defaultMessage="Cancel"
              />
            </Button>
            <Button
              color="primary"
              onClick={submitComment}
              className={classes.submit}
            >
              <FormattedMessage id="CommentsForm.Send" defaultMessage="Send" />
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </Container>
  );
}
