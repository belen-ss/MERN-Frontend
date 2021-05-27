import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getSession } from "../helpers/helpers";

// Verificando la autenticación
const checkAuth = () => {
  // Si es falso retorna falso si no, verdadero
  return !getSession() ? false : true;
};

export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  componentWillMount() {
    this.setState({
      auth: checkAuth() && !this.state.auth,
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    console.log(Component);
    return (
      <Route {...rest}
        render={(props) => {
          this.state.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: this.state.location } }}
            />
          );
        }}
      />
    );
  }
}

/* import React, { useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getSession } from "../helpers/helpers.js";

// Verificando la autenticación
const checkAuth = () => {
  // Si es falso retorna falso si no, verdadero
  return !getSession() ? false : true;
};

const PrivateRoute = ({component, ...rest}) => {
  const [auth, setAuth] = useState(false);

  // Instanciamos location
  const location = useLocation();

  // Solo que ambos sean true, se setea
  setAuth(checkAuth() && !auth);

  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) => {
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute; */
