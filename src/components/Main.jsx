import { Component } from "react";
import { Container, Card, CardMedia, CardContent, Typography } from "@mui/material";

class Main extends Component {
    render() {
        return (
            <Container sx={{ marginTop: 3 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component='div'>
                            Current weather
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}

export default Main