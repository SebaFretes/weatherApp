import axios from 'axios';
import { useState } from 'react';

export const useWeather = () => {

  const [weather, setWeather] = useState({
    name: '',
    temp: 0,
    humidity: 0
  })

  const fetchWeather = async (search) => {

    const apiKey = import.meta.env.VITE_API_KEY

    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
      const { data } = await axios(geoURL);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      const { data: result } = await axios(weatherURL);

      setWeather({
        name: result.name,
        temp: Math.round(result.main.temp),
        humidity: result.main.humidity
      });

      console.log(result.name);
      console.log(`Temperatura ${Math.round(result.main.temp)}°C`);
      console.log(`Humedad ${result.main.humidity}%`);

    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  }

  return {
    weather,
    fetchWeather
  }
}
