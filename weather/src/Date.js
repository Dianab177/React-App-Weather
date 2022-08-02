import React from 'react';
import "./Container.css";

const Date = () => {
  return (
  <div className='Date'>
     <p>Wednesday 12:21</p>
     
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    let day = days[date.getDay()];
    let hour = date.getHours();

    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
   let dia =  `${day} ${hour}:${minutes}`;
    return dia;
  
    </div>
  )
}

export default Date