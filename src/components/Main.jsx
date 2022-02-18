import { Component } from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast";
import axios from "axios";

class Main extends Component {
    state = {
        location: {
            city: ''
        },
        weather: {},
        forecast: []
    }

    getCoordinates = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    getLocation = async () => {
        const pos = await this.getCoordinates()
        let lat = pos.coords.latitude
        let long = pos.coords.longitude

        let res = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=pk.3b435a5c2be471458ee4b4646ca4ea74&lat=${lat}&lon=${long}&format=json`)
        let location = { lat: lat, long: long, city: res.data.address.city, country: res.data.address.country }
        return location
    }

    getWeather = async () => {
        let coords = await this.getLocation()

        let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.long}&appid=517216a9175be173bb6916d2b8f1f86b&units=metric`)

        let weather = {
            timestamp: res.data.current.dt,
            temp: res.data.current.temp,
            feelsLike: res.data.current.feels_like,
            pres: res.data.current.pressure,
            rh: res.data.current.humidity,
            dewpt: res.data.current.dew_point,
            uv: res.data.current.uvi,
            weather: {
                icon: res.data.current.weather[0].icon,
                main: res.data.current.weather[0].main,
                description: res.data.current.weather[0].description
            }
        }
        let forecast = res.data.daily.slice(1, 4)

        this.setState({ location: coords, weather, forecast })
    }

    componentDidMount() {
        this.getWeather()
    }

    render() {
        console.log("location:", this.state.location)
        console.log("weather:", this.state.weather)
        console.log("forecast:", this.state.forecast)

        let weatherData = (
            <Container sx={{ paddingTop: 2 }}>
                <Typography variant="h3" component="div">{this.state.location.city}, {this.state.location.country}</Typography>
                <Stack direction="row">
                    <Stack>
                        <Typography variant="h4" component="div">Current</Typography>
                        <CurrentWeather data={this.state.weather} />
                    </Stack>
                    <Stack>
                        <Typography variant="h4" component="div">Forecast</Typography>
                        <Stack direction="row">
                            {this.state.forecast.map((day) => <Forecast key={day.dt} data={day} />)}
                        </Stack>
                    </Stack>
                </Stack>
                <Button variant="contained" onClick={this.getWeather}>Update</Button>
            </Container>
        )

        let placeholder = (
            <Container>
                <Typography variant="h4" component="div">Loading data...</Typography>
            </Container>
        )

        let showWeather = this.state.location.city === '' ? placeholder : weatherData
        
        return (
            <Container sx={{ paddingTop: 2 }}>
                { showWeather }
            </Container>
            
        
        )
    }
}

export default Main