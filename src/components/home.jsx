import React, { Component } from "react";
import Hero from "./hero";
import NavBar from "./navBar";
import TopBar from "./topBar";
const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
