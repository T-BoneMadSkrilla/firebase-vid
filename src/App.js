import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./ducks/store";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
