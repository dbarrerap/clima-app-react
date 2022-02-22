import { Component } from "react";
import { Card, CardContent, Divider, Typography, Stack, CardMedia, Grid } from "@mui/material";

class Forecast extends Component {
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
        const formattedDate = `${ month }, ${ day }`
        return formattedDate
    }
    render() {
        const forecast = this.props.data
        return (
            <Grid item xs={4}>
            <Card>
                <Stack direction="row">
                    <CardContent>
                        {/* <Stack direction="row"> */}
                            <Typography variant="body2" component="div">
                                {this.getDate(forecast.dt)}
                            </Typography>
                            <Divider />
                            <Typography variant="h5" component="div">
                                {forecast.temp.day}
                            </Typography>
                        {/* </Stack> */}
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png` }
                        alt={ forecast.weather[0].description }
                    />
                </Stack>
            </Card>
            </Grid>
        )
    }
}

export default Forecast
