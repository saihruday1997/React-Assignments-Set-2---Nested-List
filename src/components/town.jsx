import React, { useState } from "react";

export default function Town(props) {
  let town = props.town;
  let id = props.index;

  let [clicked, setClicked] = useState(false);

  return <div id={`town${id}`}>{town.name}</div>;
}
