import React from "react";
import "./nav.scss";
export default function navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="brandName">udix.</div>
          <ul className="nav">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">contacts</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
          </ul>
          <div className="search">search</div>
        </nav>
      </div>
    </header>
  );
}
