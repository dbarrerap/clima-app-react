import { Component } from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast";
import Weather from "../services/Weather";
import ReactLoading from "react-loading"

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
            <>
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
            </>
        )

        let placeholder = <ReactLoading type="bars" color="#003b6f" width={100} height={50} />

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