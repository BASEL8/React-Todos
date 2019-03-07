import React from "react";

export default function FunctionalComponent(props) {
  const name = props.user;
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  //style
  const h1Style = {};
  const spanStyle = {
    backgroundColor: "gold",
    color: "#282c33",
    padding: "0 5px",
    fontWeight: 900
  };

  return (
    <div>
      <h1 style={h1Style}>
        Good
        {date.getHours() < 12 && date.getHours() > 5
          ? ((h1Style.color = "gold"), " Morning")
          : date.getHours() >= 12 && date.getHours() < 17
          ? ((h1Style.color = "orange"), "afternoon")
          : ((h1Style.color = "dodgerblue"), "night")}
      </h1>
      <p>
        Hello! <span style={spanStyle}>{` ${name}`}</span>
      </p>
      <p>
        we are in {days[date.getDay()]} Today 🥳 and it's currently about{" "}
        {date.getHours() % 12}
      </p>
    </div>
  );
}
