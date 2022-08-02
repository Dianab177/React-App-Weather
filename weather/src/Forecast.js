import React from 'react';
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="container">
        <div className="Forecast-li">
          <div className="Ul-description">
            <ul>
              <li>Wed</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>16º 9º</li>
            </ul>
          </div>
          <div className="Ul-description">
            <ul>
              <li>Thu</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/04d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>17º 11º</li>
            </ul>
          </div>
          <div className="Ul-description">
            <ul>
              <li>Fri</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>16º 9º</li>
            </ul>
          </div>
          <div className="Ul-description">
            <ul>
              <li>Sat</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>17º 12º</li>
            </ul>
          </div>
          <div className="Ul-description">
            <ul>
              <li>Sun</li>
              <li>
                <div className="img-icon">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    id="weather-icon"
                    width="45px"
                    alt="icon weather"
                  />
                </div>
              </li>
              <li>14º 13º</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Forecast