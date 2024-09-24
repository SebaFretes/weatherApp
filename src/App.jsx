import styles from './App.module.css';
import { Alert } from './components/Alert/Alert';
import { Form } from './components/Form/Form';
import { Spinner } from './components/Spinner/Spinner';
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { useWeather } from './hooks/useWeather';

export const App = () => {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();  

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
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}
