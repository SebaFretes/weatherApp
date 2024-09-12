import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hooks/useWeather';

export const App = () => {

  const { weather, fetchWeather, hasWeatherData } = useWeather();  

  return (
    <>
      <h1 className={styles.title}>Weather App</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {hasWeatherData(weather) &&
          <WeatherDetail weather={weather} />
        }
      </div>
    </>
  )
}
