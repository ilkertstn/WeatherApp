import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Info from "./components/info";

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} setState={setState} />
      <Info info={info} setInfo={setInfo} state={state} />
    </div>
  );
}

export default App;
