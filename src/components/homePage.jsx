import React from "react";
const HomePage = (props) => {
  return <h4>Hi ,{props.location.state.name}</h4>;
};
export default HomePage;
