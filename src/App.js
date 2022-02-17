import { Component } from "react";
import NavigationBar from './components/NavigationBar'
import Main from "./components/Main";

class App extends Component {
  state = {
    location: {
      city: "Guayaquil",
      country: "Ecuador"
    },
    weather: {
      timestamp: 1645064834,
      temp: 27.99,
      feelsLike: 31.12,
      pres: 1011,
      rh: 74,
      dewpt: 22.92,
      uv: 0,
      weather: {
        main: "Clouds",
        description: "broken clouds",
        icon: "04n"
      }
    },
    forecast: [
      {
        timestamp: 1645117200,
        temp: {
          day: 28.38,
          night: 22.77
        },
        feelsLike: {
          day: 31.27,
          night: 23.5
        },
        weather: {
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      },
      {
        timestamp: 1645203600,
        temp: {
          day: 25.91,
          night: 23.64
        },
        feelsLike: {
          day: 26.51,
          night: 24.28
        },
        weather: {
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      },
      {
        timestamp: 1645290000,
        temp: {
          day: 30.07,
          night: 23.36
        },
        feelsLike: {
          day: 33.17,
          night: 24.02
        },
        weather: {
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Main data={this.state} />
      </div>
    )
  }
}

export default App;
