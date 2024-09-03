import styles from './Alert.module.css';

export const Alert = ({children}) => {
  return (
    <div className={styles.alert}>{children}</div>
  )
}
