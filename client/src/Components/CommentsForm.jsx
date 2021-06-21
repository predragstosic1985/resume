import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MessageIcon from "@material-ui/icons/Message";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import CommentsFormHeader from "./AdditionalComponents/CommentsFormHeader";
import { postComment, updateComment } from "../commentsServices";
import { isEmpty } from "lodash";
import proxyPaths from "../proxyPaths.json";

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
}));

export default function CommentsForm({
  setDetails,
  details,
  setOpenModal,
  reFetchetrivedComments,
}) {
  const classes = useStyles();

  const initState = {
    name: "",
    email: "",
    comment: "",
  };

  const [inputsError, setInputsError] = useState({});
  const [comment, setComment] = useState(details ? details : initState);

  useEffect(() => {
    const errors = { ...inputsError };
    Object.keys(errors).forEach((propName) => {
      if (!isEmpty(comment[propName])) {
        delete errors[propName];
      }
    });
    setInputsError(errors);
  }, [comment]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    setDetails();
    setComment(initState);
    setOpenModal(false);
  };

  const onSubmit = () => {
    const errors = {};
    Object.keys(comment).forEach((propName) => {
      if (isEmpty(comment[propName])) {
        if (propName !== "id") {
          errors[propName] = { content: "Please add a value" };
        }
      }
    });
    isEmpty(errors) ? submitComment(comment) : setInputsError(errors);
  };

  const submitComment = async () => {
    const response = comment.docID
      ? await updateComment(comment.docID, comment)
      : await postComment(comment);
    if (response) {
      await reFetchetrivedComments();
      setOpenModal(false);
      setComment(initState);
    } else {
      console.log("err post");
    }
    postingRegister();
  };

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const postingRegister = () => {
    const user = JSON.stringify({ ...comment });
    fetch(`${proxyPaths.basePath}/api/email/sent`, {
      method: "post",
      body: user,
      header: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => {
        console.log("sve je ok");
      })
      .catch((error) => {
        console.log("iz castch-a " + error);
      });
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
          {/* <CommentsFormCheckBox /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleOnChange}
            error={inputsError.name ? true : false}
            helperText={
              inputsError.name ? (
                <FormattedMessage
                  id="CommentsForm.nameValidation"
                  defaultMessage="Name/Nickname"
                />
              ) : (
                ""
              )
            }
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
            error={inputsError.email ? true : false}
            helperText={
              inputsError.email ? (
                <FormattedMessage
                  id="CommentsForm.emailValidation"
                  defaultMessage="email"
                />
              ) : (
                ""
              )
            }
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
            error={inputsError.comment ? true : false}
            helperText={
              inputsError.comment ? (
                <FormattedMessage
                  id="CommentsForm.commentValidation"
                  defaultMessage="email"
                />
              ) : (
                ""
              )
            }
            id="comment"
            label={
              <FormattedMessage
                id="CommentsForm.comment"
                defaultMessage="comenet"
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
              onClick={onSubmit}
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
