import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "auto",
    width: "50%",
    border: "3px solid #e5e5e5",
    borderRadius: "10px",
    padding: "10px",
  },
}));

export default function CommentButton({ handleOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<AddCommentIcon />}
      >
        <FormattedMessage id="CommentsButton.Add" defaultMessage="commnet" />
      </Button>
    </div>
  );
}
