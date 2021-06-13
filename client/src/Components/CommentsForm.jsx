import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MessageIcon from "@material-ui/icons/Message";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import CommentsFormHeader from "./AdditionalComponents/CommentsFormHeader";
import CommentsFormCheckBox from "./AdditionalComponents/CommentsFormCheckBox";
import { postComment, getComments } from "../commentsServices";
import useFetch from "../hooks/Fetcher";

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CommentsForm() {
  const classes = useStyles();
  const [
    retrivedComments,
    loadRetrivedComments,
    reFetchetrivedComments,
    setRetrivedComments,
  ] = useFetch(getComments(), true);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const submitComment = async () => {
    const response = await postComment(comment);
    if (response) {
      console.log("success");
      reFetchetrivedComments();
    } else {
      console.log("err");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageIcon />
        </Avatar>
        <CommentsFormHeader />

        <form className={classes.form} noValidate>
          <CommentsFormCheckBox />
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
            autoComplete="off"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={submitComment}
            className={classes.submit}
          >
            <FormattedMessage id="CommentsForm.Send" defaultMessage="Send" />
          </Button>
        </form>
      </div>
    </Container>
  );
}
