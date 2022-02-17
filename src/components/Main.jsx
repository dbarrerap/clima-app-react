import { Component } from "react";
import { Container } from "@mui/material";
import CurrentWeather from "./CurrentWeather"

class Main extends Component {
    render() {
        
        return (
            <Container sx={{ paddingTop: 2 }}>
                <CurrentWeather data={this.props.data} />
            </Container>
        )
    }
}

export default Main