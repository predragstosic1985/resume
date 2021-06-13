import React from "react";
import Button from "@material-ui/core/Button";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { FormattedMessage } from "react-intl";
import styles from "./style/CommentsButton.module.scss";

export default function CommentButton({ handleOpen }) {
  return (
    <Button
      className={styles.containerCommentBtn}
      onClick={handleOpen}
      variant="contained"
      color="secondary"
      size="small"
      startIcon={<AddCommentIcon />}
    >
      <FormattedMessage id="CommentsButton.Add" defaultMessage="commnet" />
    </Button>
  );
}
