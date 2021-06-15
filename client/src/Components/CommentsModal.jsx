import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import CommentsForm from "./CommentsForm";

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

export default function DraggableDialog({
  setDetails,
  details,
  openModal,
  setOpenModal,
  reFetchetrivedComments,
}) {
  return (
    <div>
      <Dialog
        open={openModal}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <CommentsForm
              reFetchetrivedComments={reFetchetrivedComments}
              setDetails={setDetails}
              details={details}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
