import React from "react";

export default function Models(props) {
  return (
    <div>
      <ul className="dots">
        <li>Name: {props.name} </li>
        <li>Manufacturer:{props.manufacturer}</li>
        <li>Year:{props.year}</li>
        <li>Origin:{props.origin}</li>
      </ul>
    </div>
  );
}
