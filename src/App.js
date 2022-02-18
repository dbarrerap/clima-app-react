import { Component } from "react";
import NavigationBar from './components/NavigationBar'
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Main />
      </div>
    )
  }
}

export default App;
