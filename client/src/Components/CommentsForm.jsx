import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import MessageIcon from "@material-ui/icons/Message";
// import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import CommentsFormHeader from "./AdditionalComponents/CommentsFormHeader";
import CommentsFormCheckBox from "./AdditionalComponents/CommentsFormCheckBox";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Neki string © "}
//       <Link color="inherit" href="/">
//         Link za neki website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CommentsForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageIcon />
        </Avatar>
        <CommentsFormHeader />
        {/* <Typography component="h1" variant="h5">
          <FormattedMessage
            id="CommentsForm.header"
            defaultMessage="Komentar"
          />
        </Typography> */}
        <form className={classes.form} noValidate>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={
              <FormattedMessage
                id="CommentsForm.public"
                defaultMessage="public"
              />
            }
          /> */}
          <CommentsFormCheckBox />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={
              <FormattedMessage
                id="CommentsForm.email"
                defaultMessage="Email"
              />
            }
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="text"
            label={
              <FormattedMessage
                id="CommentsForm.comment"
                defaultMessage="commnet"
              />
            }
            name="text"
            autoComplete="off"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
