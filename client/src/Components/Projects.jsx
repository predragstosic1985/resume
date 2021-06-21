import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import ProjectsLoaders from "./ProjectsLoaders";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1976d2",
  },
  icon: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Projects() {
  const history = useHistory();
  const classes = useStyles();

  const goToHome = () => {
    history.push("/resume");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <HomeIcon className={classes.icon} onClick={goToHome} />
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
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Describe ispod tri loadera mala sa projektima contrimo armija
              freelance linkovi za contimo linkovi za freelance u karticama
            </Typography>
            <ProjectsLoaders />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      View
                    </Button> */}
                    <Button size="small" color="primary">
                      visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <FormattedMessage
            id="ProjectsDescription.thn"
            defaultMessage="Thank you"
          />
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
