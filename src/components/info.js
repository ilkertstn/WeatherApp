import React from "react";
import SmallWeather from "./smallWeather";
export default function Info({ info, state }) {
  return (
    <div>
      <div className="info-main">
        {state ? (
          <div className="info">
            <img
              alt=""
              src={info?.current?.condition?.icon}
              height="200px"
              width="200px"
            ></img>
            <div className="info2">
              <p>{info?.location?.country}</p>
              <h1>{info?.location?.name}</h1>
              <p>{info?.current?.temp_c}°C</p>
              <p>{info?.current?.condition?.text}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="inner">
        <SmallWeather
          date={info?.forecast?.forecastday[0].date}
          icon={info?.forecast?.forecastday[0].day.condition.icon}
          temperature={info?.forecast?.forecastday[0].day.avgtemp_c}
        />
        <SmallWeather
          date={info?.forecast?.forecastday[1].date}
          icon={info?.forecast?.forecastday[1].day.condition.icon}
          temperature={info?.forecast?.forecastday[1].day.avgtemp_c}
        />
        <SmallWeather
          date={info?.forecast?.forecastday[2].date}
          icon={info?.forecast?.forecastday[2].day.condition.icon}
          temperature={info?.forecast?.forecastday[2].day.avgtemp_c}
        />
      </div>
    </div>
  );
}
