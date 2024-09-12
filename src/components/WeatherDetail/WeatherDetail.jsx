import styles from './WeatherDetail.module.css';

export const WeatherDetail = ({weather}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.name}>{weather.name}</h2>
        <p className={styles.data}>Temperatura {weather.temp}°C</p>
        <p className={styles.data}>Humedad {weather.humidity}%</p>
    </div>
  )
}
