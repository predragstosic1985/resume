import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(0),
    },
    marginTop: theme.spacing(1),
  },
  gridStyle: {
    width: "15rem",
  },
  card: {
    margin: "0.1rem",
    height: "23rem",
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [projectNumber, setProjectNumber] = useState(0);
  const [projectArmyNumber, setProjectArmyNumber] = useState(0);
  const [projectNumberFreeLance, setProjectNumberFreeLance] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress === 100 ? 100 : prevProgress + 2
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectNumber((prevProgress) =>
        prevProgress === 7 ? 7 : prevProgress + 1
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectArmyNumber((prevProgress) =>
        prevProgress === 20 ? 20 : prevProgress + 1
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectNumberFreeLance((prevProgress) =>
        prevProgress === 10 ? 10 : prevProgress + 1
      );
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const CircularProgressWithLabel = (props) => {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          color="secondary"
          size={70}
          variant="determinate"
          {...props}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" component="div" color="textSecondary">
            {props.numberOfProjects}+
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Contrimo
            </Typography>
            <Typography gutterBottom align="center">
              <CircularProgressWithLabel
                color="primary"
                thickness={6}
                value={progress}
                numberOfProjects={projectNumber}
              />
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              variant="subtitle2"
              align="center"
            >
              number of projects
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              variant="body1"
              align="center"
            >
              nov 2018 - present
            </Typography>
            <Typography variant="caption" align="center" gutterBottom>
              IT Consultant
            </Typography>
            <Typography align="justify">
              Since 2018 I am working from Contrimo consulting and innovations
              as an IT consultant.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link href="https://www.contrimo.com/en/" target="_blank">
                visit
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Army
            </Typography>
            <Typography gutterBottom align="center">
              <CircularProgressWithLabel
                thickness={6}
                value={progress}
                numberOfProjects={projectArmyNumber}
              />
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              variant="subtitle2"
              align="center"
            >
              number of projects
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              variant="body1"
              align="center"
            >
              sep 2009 - nov 2018
            </Typography>
            <Typography variant="caption" align="center" gutterBottom>
              Captain
            </Typography>
            <Typography align="justify">
              For nine years I work for the Armed forces of Serbia as a
              commissioned officer - final rank captain.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link href="http://www.vs.rs/" target="_blank">
                visit
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Freelance
            </Typography>
            <Typography gutterBottom align="center">
              <CircularProgressWithLabel
                color="inherit"
                thickness={6}
                value={progress}
                numberOfProjects={projectNumberFreeLance}
              />
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              variant="subtitle2"
              align="center"
            >
              number of projects
            </Typography>
            <Typography align="justify">
              From time to time I worked freelance, various technologies, and
              libraries. You can check out some of the projects in the cards.
              There are many projects in Node JS, React, bootstrap. You are
              welcome to explore.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
