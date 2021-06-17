import React, { useState, useEffect } from "react";
import styles from "./style/LoginPage.module.scss";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import { isEmpty, isEqual } from "lodash";

const LoginPage = () => {
  const history = useHistory();
  const initState = {
    username: "",
    password: "",
  };
  const authorized = {
    username: "demo",
    password: "demo",
  };
  const [inputsError, setInputsError] = useState({});
  const [user, setUser] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const errors = { ...inputsError };
    Object.keys(errors).forEach((propName) => {
      if (!isEmpty(user[propName])) {
        delete errors[propName];
      }
    });
    setInputsError(errors);
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isLoading) {
      const timeOutId = setTimeout(() => callRefreshPage(isLoading), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [isLoading]);

  const onSubmit = () => {
    const errors = {};
    Object.keys(user).forEach((propName) => {
      if (isEmpty(user[propName])) {
        errors[propName] = { content: "Please add a value" };
      }
    });
    if (isEmpty(errors) && isEqual(user, authorized)) {
      submitUser(user);
    } else {
      setInputsError(errors);
    }
  };

  const handleOnChange = (e, data) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const refreshPage = () => {
    setIsLoading(true);
  };

  const callRefreshPage = () => {
    window.location.reload();
  };

  const submitUser = () => {
    setUser(initState);
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
            <input
              type="text"
              name="username"
              required={true}
              onChange={handleOnChange}
            />
            <label>Username</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="password"
              name="password"
              required={true}
              onChange={handleOnChange}
            />
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
