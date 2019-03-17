import React from "react";
import "./style.css";

function Tile(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`tile`}
    />
  );
}

export default Tile
