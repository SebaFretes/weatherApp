import { countries } from "../../data/countriesList"

export const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="city">Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                />
            </div>

            <div>
                <label htmlFor="country">País:</label>
                <select>
                    <option value="">---Seleccioná un país---</option>
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Buscar" />
        </form>
    )
}
