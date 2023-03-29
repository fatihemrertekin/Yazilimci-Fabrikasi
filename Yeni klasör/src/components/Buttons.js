import React from 'react'

function Buttons(props) {

    const {temperature, setTemperature} = props;

    const handleClick = (temperature) => {
        setTemperature(temperature);
    } 

  return (
    <div>
        <p>Mevcut Sıcaklık Değeri: {temperature} °C</p>

        <button 
        onClick={() => handleClick(temperature+1)}
        className="btn btn-success">+</button>
        
        <button 
        onClick={() => handleClick(temperature-1)}
        className="btn btn-danger">-</button>
        
    </div>
  )
}

export default Buttons