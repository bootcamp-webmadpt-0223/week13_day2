import React from "react";

export default function Card(props) {
  return (
    <div className="ih-card">
      <img src={props.img} alt="declarative" />
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
}
