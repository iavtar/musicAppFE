import React, { Component } from "react";
import './style.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand">
              <i className="fa fa-music fa-3x" aria-hidden="true"></i>
            </a>
            <a className="btn btn-light">
              Logout
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
