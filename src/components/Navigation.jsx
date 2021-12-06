import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            CPS530 Project : React and NODEJS
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page2">
                  Installing the Frameworks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page3">
                  Setting Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page4">
                  Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page5">
                  Conclusion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/page6">
                  Credits/References
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
