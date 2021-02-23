import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Login, setstateLogin] = useState(false);
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPassword(e.target.value);
  };
  const checkAuth = (e) => {
    console.log(Email);
    console.log(Password);
    if (Email === "arslan@vistascale.com" && Password === "12345") {
      console.log("Authenticated");
      history.push("/");
    }
  };
  return (
    <div>
      <Form style={{ width: "50%", margin: "10%", marginLeft: "25%" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => changeEmail(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => changePass(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={(e) => checkAuth(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
