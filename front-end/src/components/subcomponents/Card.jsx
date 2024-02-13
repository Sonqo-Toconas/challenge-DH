import React from "react";

const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
      <img src= {props.srcImage} alt= {props.altImage} />
    </div>
  );
}

export default Card;