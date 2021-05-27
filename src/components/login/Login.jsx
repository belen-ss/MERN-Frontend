import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { calculateExp } from "../helpers/helpers.js";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

// Host
import { APIHOST as host } from "../../app.json";

import "./Login.scss";

import Loading from "../loading/Loading";

// Instanciamos las cookies
const cookies = new Cookies();

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Instanciamos history para redireccionar
  const history = useHistory();

  // Evento de login
  const login = () => {
    setLoading(true);
    axios
      .post(`${host}/users/login`, {
        user: user,
        password: password,
      })
      .then((response) => {
        if (response.data.token === null) {
          alert("Usuario y/o contraseña inválido")
        } else {
          cookies.set("_s", response.data.token, {
              path: "/",
              expires: calculateExp(),
          })
          history.push('/employees')
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <Container id="login-container">
      <Loading show={loading} />
      <Row>
        <Col
          sm="12"
          xs="12"
          md={{ span: 4, offset: 4 }}
          lg={{ span: 4, offset: 4 }}
          xl={{ span: 4, offset: 4 }}
        >
          <Row>
            <h2>Login</h2>
          </Row>
          <Row>
            <Col sm="12" xs="12" md="12" lg="12" xl="12">
              <Form id="form-container">
                <Form.Group>
                  <Form.Label>User</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter user"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={() => login()}>
                  Iniciar sesión
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
