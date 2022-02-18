import Location from "./Location";
import axios from "axios";

export default class Weather {
    getLocationWeather = async () => {
        let location = new Location()
        let locData = await location.getLocation()

        const API_KEY = ''
        const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${locData.lat}&lon=${locData.long}&appid=${API_KEY}&units=metric`

        const response = await axios.get(API_URL)


        return {
            location: locData,
            weather: {
                timestamp: response.data.current.dt,
                temp: response.data.current.temp,
                feelsLike: response.data.current.feels_like,
                pres: response.data.current.pressure,
                rh: response.data.current.humidity,
                dewpt: response.data.current.dew_point,
                uv: response.data.current.uvi,
                weather: {
                    icon: response.data.current.weather[0].icon,
                    main: response.data.current.weather[0].main,
                    description: response.data.current.weather[0].description
                }
            }, forecast: response.data.daily.slice(1, 4)
        }
    }
}