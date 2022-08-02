import React, { useState } from 'react';
import axios from "axios";
import "./Container.css";
import "./Forecast.css";


const Search = (props) => {
  const [city, setCity] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [forecast, setForecast] = useState({});


   function WeatherForecast(response) {
    setSearchSubmit(true);
    setForecast({
    city: response.data.name,
    temperature: response.data.main.temp,
    wind: Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
    maximum: Math.round(response.data.main.temp_max),
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  
  });
 }

   function HandleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(WeatherForecast);
   }

   function Searching(event) {
     setCity(event.target.value);
   }

    let form = (
      <form onSubmit={HandleSubmit}>
         <button type="submit" class="btn btn-link" id="geolocation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="grey"
            class="bi bi-geo-alt-fill text-center"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </button>
        <input
          type="search"
          id="search-text"
          className="form control placeholder bg-transparent col-9 text-center"
          placeholder="Enter a city..."
          autoComplete="off"
          onChange={Searching}
        />
         <button type="submit" className="btn btn-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="grey"
            class="bi bi-search text-center"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
     </form>);
   
      if (searchSubmit) {
        return (
          <div>
           {form}
            <h3>{forecast.city}</h3>
            <img className='icon-1' src={forecast.icon} alt={forecast.description}/>
            <h1>{Math.round(forecast.temperature)}ºC</h1>
            <h5>{forecast.description}</h5>
            <div className="Forecast-li">
            <div className="Ul-description">
          <ul>
            <li>{forecast.wind} km/h</li>
            <li>Wind</li>
          </ul>
          <ul>
            <li>{forecast.humidity}%</li>
            <li>Humidity</li>
          </ul>
          <ul>
            <li>{forecast.maximum}º</li>
            <li>Maximum</li>
          </ul>
          </div>
          </div>
         </div>
        );
        
      } else{
        return(
          form
        );
      }
}

export default Search