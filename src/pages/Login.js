import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Link, useHistory } from "react-router-dom";
import { withRouter, Redirect, Switch, Route } from "react-router";
import "../App.css";

const Login = () => {
  let loggedIn = false;
  let action = undefined;
  const [seller, setSeller] = useState();
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
      if (seller) {
        axios
          .get("https://artisaanz.herokuapp.com/seller/find/" + seller)
          .then((response) => setUser(response.data));
      }
    }
  });

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginTry = (e) => {
    e.preventDefault();

    console.log("Trying to log in...");

    console.log(data.username);
    if (data.username === user.username && data.password === user.password) {
      console.log("That's a match!");
      loggedIn = true;
      console.log(loggedIn);
      action = <Redirect push to="/myyjälle" />;

      // <Link
      //   to={{
      //     pathname: "/myyjälle",
      //     //state: { seller: user.id },
      //   }}
      // >
      //   Näin!
      // </Link>
    } else {
      console.log("incorrect username or password");
      console.log(
        "username should be: " +
          user.username +
          " and password:" +
          user.password
      );
      console.log("id: " + seller);
    }
  };

  return (
    <>
      <Form onSubmit={loginTry}>
        <Form.Group>
          <Form.Label htmlFor="">Username:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="username"
            maxlength="30"
            placeholder="example"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Password:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="password"
            maxlength="30"
            placeholder="secret"
            onChange={changeData}
          />
        </Form.Group>
        <button type="submit" value="Send data">
          Kirjaudu sisään/login
        </button>
      </Form>

      <div>{loggedIn ? <Redirect push to="/myyjälle" /> : null}</div>
      <div>{loginTry}</div>
      <div>{loggedIn ? <p>testi</p> : <p>loggedIn muka false</p>}</div>
      {user ? (
        <Link
          to={{
            pathname: "/myyjälle",
            state: { seller: user.nimi },
          }}
        >
          Tästäpä myyjän sivuille
        </Link>
      ) : (
        <p>lattaapi vielä</p>
      )}
      <div>{action}</div>
    </>
  );
};

export default Login;
