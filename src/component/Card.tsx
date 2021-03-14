"use strict";
import React, { FunctionComponent, useState, useRef } from "react";
import "../style/Card.css";
interface IProduct {
  name: string;
  price: string;
  stock: string;
}

const Card: FunctionComponent<{
  initial?: boolean;
  title?: string;
  description?: string;
  image?: string;
  links?: string[];
}> = ({
  initial = false,
  title = "",
  description = "",
  image = "",
  links = "",
}) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [fade, setfade] = useState(initial);
  const [flip, setflip] = useState(initial);
  const inputEl = useRef(null);
  return (
    <div
      className={flip ? "flip-container flip" : "flip-container "}
      id="flip-container"
      onClick={() => setflip(!flip)}
    >
      <div className="flipper">
        <div className="front">
          <h2 className="flip-container-header"> {title} </h2>
          <p className="flip-container-description">{description}</p>
          <ul>
            <li>git hub link here</li>
            <li>demo link</li>
          </ul>
        </div>
        <div className="back">
          <h2 className="flip-container-header">{title}</h2>
          <p className="flip-container-description">{description}</p>
          <ul>
            <li>git hub link here</li>
            <li>demo link</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
