import React from "react";
import "./Loading.scss";
import { Spinner } from "react-bootstrap";

const Loading = ({show}) => {
  console.log(show);
  return (
    <>
      {show ? (
        <div id="loading-backdrop">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : null }
    </>
  );
};

export default Loading;
