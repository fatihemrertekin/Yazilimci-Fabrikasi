import React from "react";

function Celvin(props) {
  const kelvin = props.temperature + 273.15;

  return (
    <div>
      <p className="formats">Kelvin : {kelvin} °K</p>
    </div>
  );
}

export default Celvin;