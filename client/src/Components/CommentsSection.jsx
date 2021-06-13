import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import styles from "./style/CommentsSection.module.scss";
import useFetch from "../hooks/Fetcher";
import { getComments } from "../commentsServices";

export default function CommentsSection() {
  // const [
  // retrivedComments,
  // loadRetrivedComments,
  // reFetchetrivedComments,
  // setRetrivedComments,
  // ] = useFetch(getComments(), false);
  const [
    retrivedComments,
    loadRetrivedComments,
    reFetchetrivedComments,
    setRetrivedComments,
  ] = useFetch(getComments.bind(null, null), false);

  useEffect(() => {
    if (!retrivedComments) {
      reFetchetrivedComments();
    }
  }, [retrivedComments]);

  console.log(retrivedComments);

  return (
    <div className={styles.containerComment}>
      <h1>Comments</h1>
      {retrivedComments ? (
        retrivedComments.map((comm, index) => {
          const { name, email, comment } = comm;
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
                    <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
                    <p style={{ textAlign: "left" }}>{comment}</p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                      posted 1 minute ago
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
    </div>
  );
}
