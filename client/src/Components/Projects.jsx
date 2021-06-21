import React, { useContext } from "react";
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
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import ProjectsLoaders from "./ProjectsLoaders";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import imgSoldatDent from "../Assets/images/soldat_dent.jpg";
import imgDMS from "../Assets/images/virtualDoc.jpg";
import imgBGym from "../Assets/images/fajt.jpg";
import imgManda from "../Assets/images/manda.jpg";
import imgUgr from "../Assets/images/ugr.jpg";
import imgSara from "../Assets/images/sara.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { Context } from "../Wrapper/Wrapper";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1976d2",
  },
  formStyle: {
    marginLeft: "2rem",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    backgroundColor: "#fff",
    width: "5rem",
    borderRadius: "2px",
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

export default function Projects() {
  const history = useHistory();
  const context = useContext(Context);
  const classes = useStyles();

  const goToHome = () => {
    history.push("/resume");
  };

  return (
    <>
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
          <div className={classes.formStyle}>
            <FormControl className={classes.formControl}>
              <Select
                autoWidth
                value={context.locale === "en-US" ? "en" : context.locale}
                onChange={context.selectLanguage}
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="de">German</MenuItem>
                <MenuItem value="sr">Serbian</MenuItem>
              </Select>
            </FormControl>
          </div>
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
                id="ProjectsDescription.DescProjects"
                defaultMessage="Projects"
              />
            </Typography>
            <ProjectsLoaders />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgDMS}
                  title="Soldat dent"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dental management system
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.appDesc"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="http://159.89.19.117/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgSoldatDent}
                  title="Soldat dent"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Soldat Dent
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.soldatDesc"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://www.soldat-dent.rs/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgBGym}
                  title="B-Gym"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    B-Gym
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.BgymDesc"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://b-gym-batajnica.rs/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgManda}
                  title="Manda"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Manda
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.descManda"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://www.manda.rs/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgUgr}
                  title="Ugrinovci"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ugrinovci
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.descUgr"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="http://www.ugrinovci.rs/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
            {/* One START */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={imgSara}
                  title="Sara pharm"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sara pharm
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="ProjectsDescription.descSara"
                      defaultMessage="desc"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="http://www.sarapharm.rs/" target="_blank">
                      <FormattedMessage
                        id="ProjectsDescription.visit"
                        defaultMessage="visit"
                      />
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* One END */}
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
    </>
  );
}
