import { Component } from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 1, padding: 1 }}>Clima App</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar