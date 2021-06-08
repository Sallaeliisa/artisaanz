import React, { useState, useEffect, Redirect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Login = () => {
  const [seller, setSeller] = useState();
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
      axios
        .get("https://artisaanz.herokuapp.com/seller/find/" + seller)
        .then((response) => setUser(response.data));
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
      <Redirect
        to={{
          pathname: "/myyjälle",
          state: { seller: user.nimi },
        }}
      />;
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
  );
};

export default Login;

// const userList = user.map((user) => {
//   return (
//     <Dropdown.Item>
//       <Link
//         to={{
//           pathname: "/myyjälle",
//           state: { seller: user.nimi },
//         }}
//       >
//         {user.nimi}
//       </Link>
//     </Dropdown.Item>
