import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchUrl={requests.requestUpComing} />
      <Row title="Popular" fetchUrl={requests.requestPopular} />
      <Row title="Up Coming" fetchUrl={requests.requestUpComing} />
      <Row title="Up Coming" fetchUrl={requests.requestUpComing} />
    </>
  );
};

export default Home;
