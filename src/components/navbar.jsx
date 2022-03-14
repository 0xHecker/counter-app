import React, { Component } from "react";

//Stateless functional component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-info">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class Navbar extends Component {
//   state = {};

//   render() {}
// }

export default Navbar;
