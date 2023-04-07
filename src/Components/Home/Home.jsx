import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>Home page</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
