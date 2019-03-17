import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
          South Park Clicker
          <br></br>
          Score: {props.score}
    </nav>
  );
}

export default Nav;
