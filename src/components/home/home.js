import React from "react";
import Navbar from "../navbar/nav";
import "./home.scss";
import bck from "../images/bck.jpg";
function Home() {
  const style = {
    background: `url(${bck}) no-repeat center`,
    backgroundSize: "cover",
    height: "100vh"
  };
  return (
    <div className="main">
      <div style={style}>
        <Navbar />
        <div className="container grid">
          <div className="content">
            <h1>HELLOW SASS,FLEXBOX AND GRID LAYOUT</h1>
            <p>
              today we are practing the layouts and sass with react js today we
              are practing the layouts and sass with react js
            </p>
            <a> Call </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
