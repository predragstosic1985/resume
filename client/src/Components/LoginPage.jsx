import React, { useState, useEffect } from "react";
import styles from "./style/LoginPage.module.scss";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timeOutId = setTimeout(() => callRefreshPage(isLoading), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [isLoading]);

  const refreshPage = () => {
    setIsLoading(true);
  };

  const callRefreshPage = () => {
    window.location.reload();
  };

  const onSubmit = () => {
    history.push("/resume");
  };

  return (
    <div className={styles.main}>
      <Button
        color="secondary"
        onClick={refreshPage}
        startIcon={<RefreshIcon />}
      >
        change background
      </Button>
      <div className={styles.loginBox}>
        <Backdrop open={isLoading}>
          <CircularProgress color="secondary" />
        </Backdrop>
        <h2>Login</h2>
        <h3>Hint</h3>
        <h3>demo/demo</h3>

        <form>
          <div className={styles.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <button onClick={onSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
