import React from "react";

export default function SmallWeather({ date, icon, temperature }) {
  return (
    <div>
      <div className="inner-main">
        <div>
          <p>{date}</p>
          <img alt="" src={icon}></img>
          <p>{temperature}°C</p>
        </div>
      </div>
    </div>
  );
}
