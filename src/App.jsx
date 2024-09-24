import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hooks/useWeather';

export const App = () => {

  const { weather, loading, fetchWeather, hasWeatherData } = useWeather();  

  return (
    <>
      <h1 className={styles.title}>Weather App</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData(weather) &&
          <WeatherDetail weather={weather} />
        }
      </div>
    </>
  )
}
