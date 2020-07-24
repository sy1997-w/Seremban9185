import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ARView from "./components/ARView";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Recommendation from "./components/Recommendation";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div className="App">
          <Route path="/" component={Home} />
          <Route path="/arview" component={ARView} />
          <Route path="/CardDetail/:id" component={CardDetail} />
          <Route path="/about" component={About} />
          <Route path="/recommendation" component={Recommendation} />
        </div>
        <br></br>
        <br></br>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
