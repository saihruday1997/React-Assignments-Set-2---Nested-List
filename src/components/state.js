import React, { useState } from "react";
import City from "./city";

export default function State(props) {
  let id = props.index;
  let state = props.state;

  let [clicked, setClicked] = useState(false);

  return (
    <>
      <h1 id={`state${id}`} onClick={() => setClicked(!clicked)}>
        {state.name}
      </h1>
      <h1>
        {clicked &&
          state.cities.map((el, index) => <City city={el} index={index + 1} />)}
      </h1>
    </>
  );
}
