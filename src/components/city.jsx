import React, { useState } from "react";
import Town from "./town";

export default function City(props) {
  let city = props.city;
  let id = props.index;

  let [clicked, setClicked] = useState(false);

  return (
    <>
      <div id={`city${id}`} onClick={() => setClicked(!clicked)}>
        {city.name}
      </div>
      <div>
        {clicked &&
          city.towns.map((el, index) => <Town town={el} index={index + 1} />)}
      </div>
    </>
  );
}
