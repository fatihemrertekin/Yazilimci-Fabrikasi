import {useState} from "react";
import Buttons from "./components/Buttons";
import Celvin from "./components/Celvin";
import Fahrenheit from "./components/Fahrenheit";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="buttons-container">
        <Buttons temperature={temperature} setTemperature={setTemperature} />
      </div>
      <div>
        <Celvin temperature={temperature} />
        <Fahrenheit temperature={temperature} />
      </div>
    </div>
  );
}

export default App;
