import React from "react";

function Fahrenheit(props) {
  const fahrenheit = (props.temperature * 1.8 + 32).toPrecision(7);

  return (
    <div>
      <p className="formats">Fahrenheit : {fahrenheit} °F</p>
    </div>
  );
}

export default Fahrenheit;
