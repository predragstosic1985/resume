import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#73c2fb",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function ProjectsDescription() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <AccountTreeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            <FormattedMessage
              id="ProjectsDescription.Section"
              defaultMessage="Projects"
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <FormattedMessage
                id="ProjectsDescription.Projects"
                defaultMessage="Projects"
              />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <FormattedMessage
                id="ProjectsDescription.Desc"
                defaultMessage="Description"
              />
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}
