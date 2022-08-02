import React from 'react';
import "./Container.css";

const Description = () => {
  return (
    <div className="container">
    <p>Clear Sky</p>
    <div className="Ul-description">
      <ul>
        <li>4 km/h</li>
        <li>Wind</li>
      </ul>
      <ul>
        <li>92%</li>
        <li>Humidity</li>
      </ul>
      <ul>
        <li>9º</li>
        <li>Maximum</li>
      </ul>
    </div>
  </div>
  )
}

export default Description