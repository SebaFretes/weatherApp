
export const WeatherDetail = ({weather}) => {
  return (
    <div>
        <h2>{weather.name}</h2>
        <p>Temperatura actual {weather.temp}°C</p>
        <p>Humedad {weather.humidity}%</p>
    </div>
  )
}
