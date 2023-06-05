import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setformIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);

    setformIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  //   console.log(typeof emailIsValid);

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPassword(event.target.value);

    setformIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = (props) => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  console.log(typeof emailIsValid);
  //   console.log(typeof passwordIsValid);
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };
    props.onLogin(enteredEmail, enteredPassword);
    console.log(data);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onFocus={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onFocus={validatePasswordHandler}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </Card>
  );
};

export default Login;
