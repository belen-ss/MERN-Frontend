import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../auth/auth.js";

// Components
import Login from "../login/Login";
import SearchEmployees from '../employees/Employees.search';

// Creando nuestro routeador dentro del cuál irán todas las rutas
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login", "/"]} component={Login} />
        <Route exact path='/employees'component={SearchEmployees}/>
        {/* <PrivateRoute exact path="/employees" component={SearchEmployees} /> */}
        <Route
          path="*"
          component={() => (
            <h1 style={{ marginTop: 200 }}>
              404 <br /> Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
