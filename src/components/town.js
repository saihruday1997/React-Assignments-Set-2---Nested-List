import React, { useState } from "react";

export default function Town(props) {
  let town = props.town;
  let id = props.index;

  return <h1 id={`town${id}`}>{town.name}</h1>;
}
