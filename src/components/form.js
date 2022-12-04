import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Form({ setInfo, setState }) {
  const [city, setCity] = useState("");

  useEffect(() => {}, [city]);

  const handleChange = async () => {
    const api = "976dd1215a0d44c9828184833220112";
    const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=3`;
    await axios.get(baseURL).then((res) => setInfo(res.data));
    setState(true);
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
          setCity("");
        }}
      >
        <div className="form">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Enter a City..."
            value={city}
          />
        </div>
      </form>
    </div>
  );
}
