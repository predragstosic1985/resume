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
import { FormattedMessage } from "react-intl";

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

            <Typography gutterBottom variant="subtitle2" align="center">
              <FormattedMessage
                id="ProjectsDescription.NumOfPro"
                defaultMessage="number of projects"
              />
            </Typography>
            <Typography gutterBottom variant="body1" align="center">
              <FormattedMessage
                id="ProjectsDescription.nov"
                defaultMessage="nov 2018 - present"
              />
            </Typography>
            <Typography variant="caption" align="center" gutterBottom>
              <FormattedMessage
                id="ProjectsDescription.Consultant"
                defaultMessage="Consultant"
              />
            </Typography>
            <Typography align="justify">
              <FormattedMessage
                id="ProjectsDescription.decsCont"
                defaultMessage="decsCont"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link href="https://www.contrimo.com/en/" target="_blank">
                <FormattedMessage
                  id="ProjectsDescription.visit"
                  defaultMessage="visit"
                />
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              <FormattedMessage
                id="ProjectsDescription.Army"
                defaultMessage="Army"
              />
            </Typography>
            <Typography gutterBottom align="center">
              <CircularProgressWithLabel
                thickness={6}
                value={progress}
                numberOfProjects={projectArmyNumber}
              />
            </Typography>

            <Typography gutterBottom variant="subtitle2" align="center">
              <FormattedMessage
                id="ProjectsDescription.NumOfPro"
                defaultMessage="number of projects"
              />
            </Typography>
            <Typography gutterBottom variant="body1" align="center">
              <FormattedMessage
                id="ProjectsDescription.sep"
                defaultMessage="2009 - 2018"
              />
            </Typography>
            <Typography variant="caption" align="center" gutterBottom>
              <FormattedMessage
                id="ProjectsDescription.Captain"
                defaultMessage="Captain"
              />
            </Typography>
            <Typography align="justify">
              <FormattedMessage
                id="ProjectsDescription.decsArmy"
                defaultMessage="decsArmy"
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link href="http://www.vs.rs/" target="_blank">
                <FormattedMessage
                  id="ProjectsDescription.visit"
                  defaultMessage="visit"
                />
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

            <Typography gutterBottom variant="subtitle2" align="center">
              <FormattedMessage
                id="ProjectsDescription.NumOfPro"
                defaultMessage="number of projects"
              />
            </Typography>
            <Typography align="justify">
              <FormattedMessage
                id="ProjectsDescription.decsFree"
                defaultMessage="decsFree"
              />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
