import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import "../Components/ProductSingle.css";

const Login = () => {
  const [seller, setSeller] = useState();
  const [logged, setLogged] = useState();
  const history = useHistory();
  const [user, setUser] = useState();
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();
  const target = useRef(null);

  const loginTry = (e) => {
    e.preventDefault();

    if (data.username === user.username && data.password === user.password) {
      <Redirect push to="/myyjälle" />;
      setLogged(true);
    } else {
      setPopOverTitle("Kirjautuminen epäonnistui");
      setPopOverMessage("Virheellinen käyttäjätunnus tai salasana.");
      setShowPopOver(true);
      console.log("incorrect username or password");
      console.log(
        "username should be: " +
          user.username +
          " and password:" +
          user.password
      );
    }
  };

  useEffect(() => {
    if ([history.location.state, seller]) {
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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{popOverTitle}</Popover.Title>
      <Popover.Content>{popOverMessage}</Popover.Content>
    </Popover>
  );

  return (
    <>
      <Form onSubmit={loginTry}>
        <Form.Group>
          <Form.Label htmlFor="">Username:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="username"
            maxLength="30"
            placeholder="example"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Password:</Form.Label>
          <Form.Control
            type="password"
            width="10px"
            name="password"
            maxLength="30"
            placeholder="secret"
            onChange={changeData}
          />
        </Form.Group>
        <button type="submit" value="Send data" id="backbtn" ref={target}>
          Kirjaudu sisään/login
        </button>
        <Overlay target={target.current} placement="bottom" show={showPopOver} rootClose
        onHide={() => setShowPopOver(false)}>
          {popover}
        </Overlay>
      </Form>
      {logged && (
        <Redirect
          to={{
            pathname: "/myyjälle",
            state: { seller: user.nimi },
          }}
        />
      )}
    </>
  );
};

export default Login;
