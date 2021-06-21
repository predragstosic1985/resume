import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { Context } from "../Wrapper/Wrapper";
import imgUni from "../Assets/images/uni.jpg";
import imgVA from "../Assets/images/va.jpg";
import imgGarda from "../Assets/images/garda.png";

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

export default function Education() {
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
              id="Education.Section"
              defaultMessage="Education"
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
                id="Education.Section"
                defaultMessage="Education"
              />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <FormattedMessage
                id="Education.desc"
                defaultMessage="Education"
              />
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <List className={classes.root}>
              {/* Start */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="VA" src={imgUni} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <FormattedMessage id="Education.ms" defaultMessage="MS" />
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <FormattedMessage
                          id="Education.uni"
                          defaultMessage="University of Belgrade"
                        />
                        , Studentski trg 1,{" "}
                        <FormattedMessage
                          id="Education.address"
                          defaultMessage="address"
                        />
                        <FormattedMessage
                          id="Education.may"
                          defaultMessage="may"
                        />{" "}
                        2014{" "}
                      </Typography>
                      <FormattedMessage
                        id="Education.descOne"
                        defaultMessage="Education"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />
              {/* END */}
              {/* Start */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="VA" src={imgVA} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <FormattedMessage id="Education.va" defaultMessage="VA" />
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        General Pavle Jurisic Sturm 33,{" "}
                        <FormattedMessage
                          id="Education.address"
                          defaultMessage="address"
                        />
                        sep 2009{" "}
                      </Typography>
                      <FormattedMessage
                        id="Education.descTwo"
                        defaultMessage="Education"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />
              {/* END */}
              {/* Start */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="VA" src={imgGarda} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="Education.army"
                      defaultMessage="Army"
                    />
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Jovana MArinovica 1,{" "}
                        <FormattedMessage
                          id="Education.address"
                          defaultMessage="address"
                        />{" "}
                        <FormattedMessage
                          id="Education.since"
                          defaultMessage="since"
                        />{" "}
                        sep 2009{" "}
                      </Typography>
                      <FormattedMessage
                        id="Education.descThree"
                        defaultMessage="Education"
                      />
                    </>
                  }
                />
              </ListItem>
              <Divider />
              {/* END */}
            </List>
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
