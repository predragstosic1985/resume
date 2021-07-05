import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import MessageIcon from "@material-ui/icons/Message";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormattedMessage } from "react-intl";
import CommentsFormHeader from "./AdditionalComponents/CommentsFormHeader";
import { postComment, updateComment, sendEmail } from "../commentsServices";
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  popover: {
    pointerEvents: "none",
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
    const emailSender = sendEmail(comment);
    setIsLoading(true);
    if (emailSender) {
      setIsLoading(false);
    } else {
      console.log("some error occured");
      setIsLoading(false);
    }
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Backdrop open={isLoading}>
        <CircularProgress color="secondary" />
      </Backdrop>

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageIcon />
        </Avatar>
        <CommentsFormHeader />

        <form className={classes.form} noValidate>
          {/* <CommentsFormCheckBox /> */}
          <TextField
            variant="outlined"
            disabled={isLoading}
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
            disabled={isLoading}
            margin="normal"
            required
            fullWidth
            id="email"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
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
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography>
              <FormattedMessage
                id="CommentsForm.content"
                defaultMessage="polsacemo vam zahvalnicu"
              />
            </Typography>
          </Popover>
          <TextField
            variant="outlined"
            disabled={isLoading}
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
            <Button
              autoFocus
              onClick={handleClose}
              color="default"
              disabled={isLoading}
            >
              <FormattedMessage
                id="CommentsForm.Cancel"
                defaultMessage="Cancel"
              />
            </Button>
            <Button
              disabled={isLoading}
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
