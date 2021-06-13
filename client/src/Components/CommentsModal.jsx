import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import CommentsForm from "./CommentsForm";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
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

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({ openModal, setOpenModal }) {
  const classes = useStyles();

  //   const [
  //     retrivedComments,
  //     loadRetrivedComments,
  //     reFetchetrivedComments,
  //     setRetrivedComments,
  //   ] = useFetch(getComments(), true);

  const [comment, setComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  const submitComment = async () => {
    const response = await postComment(comment);
    if (response) {
      //   await reFetchetrivedComments();
      setOpenModal(false);
    } else {
      console.log("err post");
    }
  };

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <div>
      <Dialog
        open={openModal}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <CommentsForm handleOnChange={handleOnChange} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={submitComment}
            className={classes.submit}
          >
            <FormattedMessage id="CommentsForm.Send" defaultMessage="Send" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
