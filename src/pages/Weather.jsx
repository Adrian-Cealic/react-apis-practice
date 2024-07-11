import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const apiKey = '9b0c1ba6b6cf70538d4edd3fb63f8ff2';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&units=metric&appid=${apiKey}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const resp = await axios.get(currentWeatherUrl);
        setWeather(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [currentWeatherUrl]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const resp = await axios.get(forecastUrl);
        setForecast(resp.data.list.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecast();
  }, [forecastUrl]);

  if (!weather || forecast.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Weather in {weather.name}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold">{weather.weather[0].description}</h2>
        <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
      <h2 className="text-xl font-bold mt-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {forecast.map((day, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>{Math.round(day.main.temp)}°C</p>
            <p>{day.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-16 h-16 mx-auto mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
