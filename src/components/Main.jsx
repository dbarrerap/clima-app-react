import { Component } from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast";
import Weather from "../services/Weather";

class Main extends Component {
    state = {
        location: {
            city: ''
        },
        weather: {},
        forecast: []
    }

    getWeatherData = async () => {
        const weatherModel = new Weather()
        const { location, weather, forecast } = await weatherModel.getLocationWeather()
        this.setState({ location, weather, forecast })
    }

    componentDidMount() {
        this.getWeatherData()
    }

    render() {
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
                <Button variant="contained" onClick={this.getWeatherData}>Update</Button>
            </Container>
            
        
        )
    }
}

export default Main