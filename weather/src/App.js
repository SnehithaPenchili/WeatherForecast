import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './App.css';

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [forecastData, setForecastData] = useState([]);

  const getWeatherForecast = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

    axios
      .get(apiURL)
      .then((res) => {
        console.log("forecast response", res.data);
        const filteredForecast = res.data.list.filter((item, index) => index % 8 === 0);
        setForecastData(filteredForecast);
      })
      .catch((err) => {
        console.log("forecast error", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherForecast(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">5-Day Weather Forecast</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
            placeholder="Enter city name..."
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {forecastData.length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="row justify-content-center">
            {forecastData.map((forecast, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="shadow rounded weatherResultBox">
                  <h5 className="weatherDate">
                    {new Date(forecast.dt * 1000).toLocaleDateString()}
                  </h5>
                  <img
                    className="weatherIcon"
                    src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                    alt={forecast.weather[0].description}
                  />
                  <h5 className="weatherDescription">
                    {forecast.weather[0].description}
                  </h5>
                  <p className="weatherTemperature">
                    {((forecast.main.temp) - 273.15).toFixed(2)}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
