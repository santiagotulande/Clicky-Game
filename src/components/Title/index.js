import React from "react";
import "./style.css";


const Title = props => (
  <div className="title" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Title;
