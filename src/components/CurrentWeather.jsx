import { Component } from "react";
import { Card, CardMedia, CardContent, Divider, Typography, Stack } from "@mui/material";

class CurrentWeather extends Component {
    getDate = (unix) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const d = new Date(unix * 1000)
        const month = months[d.getMonth()].slice(0, 3)
        const day = d.getDate()
        const formattedDate = `${month}, ${day}`
        const fullDate = `${d.getFullYear()}/${String(d.getMonth()).padStart(2, 0)}/${String(day).padStart(2, 0)} ${d.getHours()}:${d.getMinutes()}`
        return [formattedDate, fullDate]
    }

    render() {
        const weather = this.props.data

        const listStyle = {
            marginLeft: 2,
            listStyle: 'none'
        }

        return (
            <Card variant="outlined" sx={{ margin: '0 5px 5px 0' }}>
                <Stack direction="row">
                    <CardContent>
                        <Typography variant="h3" component="div">
                            {this.getDate(weather.timestamp)[0]}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={`http://openweathermap.org/img/wn/${weather.weather.icon}@4x.png`}
                        alt={weather.weather.description}
                    />
                </Stack>
                <CardContent>
                    <Typography variant="body2" component="div">
                        Last Update: {this.getDate(weather.timestamp)[1]}
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography variant="body1" component="div">
                        <ul style={listStyle}>
                            <li><strong>Temperature:</strong> {weather.temp} C</li>
                            <li><strong>Feels Like:</strong> {weather.feelsLike} C</li>
                            <li><strong>Pressure:</strong> {weather.pres} mbar</li>
                            <li><strong>Relative Humidity:</strong> {weather.rh}%</li>
                        </ul>
                    </Typography>
                </CardContent>
                <Divider />
                <CardContent>
                    <Typography variant="body2" component="div">
                        <ul style={listStyle}>
                            <li><strong>Dew Point:</strong> {weather.dewpt} C</li>
                            <li><strong>UV Index:</strong> {weather.uv}</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default CurrentWeather