import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { useWeather } from './hooks/useWeather';

export const App = () => {

  const { weather, fetchWeather } = useWeather();  

  return (
    <>
      <h1 className={styles.title}>Weather App</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
      </div>
    </>
  )
}
