import { useState } from "react";
import { countries } from "../../data/countriesList";
import styles from './Form.module.css';
import { Alert } from "../Alert/Alert";

export const Form = ({fetchWeather}) => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    });

    const [alert, setAlert] = useState('');

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlert('Ambos campos deben estar completos');
            return;
        }
        fetchWeather();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form}>
                <label htmlFor="city">Ciudad</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ingresá la Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.form}>
                <label htmlFor="country">País</label>
                <select value={search.country} id="country" name="country" onChange={handleChange}>
                    <option value="">--Seleccioná el país--</option>
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            
            <input className={styles.submit} type="submit" value="Buscar" />
            {alert && <Alert>{alert}</Alert>}
        </form>
    )
}
