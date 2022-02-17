import { Component } from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";

class CurrentWeather extends Component {
    render() {
        const { weather, location } = this.props.data

        const listStyle = {
            marginLeft: 2,
            listStyle: 'none'
        }

        console.log(this.props)

        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">Current Weather at { location.city }, { location.country }</Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography variant="body1" component="div">
                        <ul style={ listStyle }>
                            <li><strong>Temperature:</strong> { weather.temp } C</li>
                            <li><strong>Feels Like:</strong> { weather.feelsLike } C</li>
                            <li><strong>Pressure:</strong> { weather.pres } mbar</li>
                            <li><strong>Relative Humidity:</strong> { weather.rh }%</li>
                        </ul>
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography variant="body2" component="div">
                        <ul style={ listStyle }>
                            <li><strong>Dew Point:</strong> { weather.dewpt } C</li>
                            <li><strong>UV Index:</strong> { weather.uv } C</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default CurrentWeather