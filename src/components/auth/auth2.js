import React, { useEffect, useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getSession } from "../helpers/helpers.js";

// Verificando la autenticación
const checkAuth = () => {
  // Si es falso retorna falso si no, verdadero
  return !getSession() ? false : true;
};

const PrivateRoute = ({ children, ...rest }) => {
  // Instanciamos location
  const location = useLocation();

  // Vars y const
  const [auth, setAuth] = useState(false);

  // UseEffect
  // Escucha al componente dependiendo
  // Recibe dos parámetros: una función y las dependencias para que se ejecute
  // Botones de colores que cambien el bg
  // onClick será escuchado por useEffect el que seteará el valor del bg
  // El segundo parámetro es [] y escucha 0 o muchas dependencias, la cantidad de veces que se ejecutará
  // No importa donde lo pongamos, lo que importa es la dependencia
  //
  // Solo que ambos sean true, se setea

  useEffect(() => {
    // setAuth(isAutorized && !auth);
    const isAutorized = checkAuth() && !auth;
    console.log("this is authorized", isAutorized);
    setAuth(isAutorized);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      
      <Route {...rest}>
      {console.log("this is auth", auth)}
        {auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )}
      </Route>
    </>
  );
};

export default PrivateRoute;
