import React, { useState } from "react";
import Town from "./town";

export default function City(props) {
  let city = props.city;
  let id = props.index;

  let [clicked, setClicked] = useState(false);

  return (
    <>
      <h1 id={`city${id}`} onClick={() => setClicked(!clicked)}>
        {city.name}
      </h1>
      <h1>
        {clicked &&
          city.towns.map((el, index) => <Town town={el} index={index + 1} />)}
      </h1>
    </>
  );
}
