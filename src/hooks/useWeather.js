import axios from 'axios';

export const useWeather = () => {

    const fetchWeather = async(search) => {

      const apiKey = import.meta.env.VITE_API_KEY
        
        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
            const {data} = await axios(url);
            console.log(data);
            
            
        } catch (error) {
            
        }
        
    }

  return {
    fetchWeather
  }
}
