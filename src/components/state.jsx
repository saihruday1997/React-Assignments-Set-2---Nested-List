import React, { useState } from "react";
import City from "./city";

export default function State(props) {
  let id = props.index;
  let state = props.state;

  let [clicked, setClicked] = useState(false);

  return (
    <>
      <div id={`state${id}`} onClick={() => setClicked(!clicked)}>
        {state.name}
      </div>
      <div>
        {clicked &&
          state.cities.map((el, index) => <City city={el} index={index + 1} />)}
      </div>
    </>
  );
}
