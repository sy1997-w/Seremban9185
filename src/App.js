import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ARView from "./components/ARView";
import Home from './components/Home';
import CardDetail from "./components/CardDetail";
import Navigation from './components/Navigation';
import About from './components/About';
import Recommendation from'./components/Recommendation';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Navigation />
        <div className="App">
          <Route path="/" component={Home} exact/>
          <Route exact path="/arview" component={ARView} />
          <Route exact path="/CardDetail/:id" component={CardDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/recommendation" component={Recommendation} />
        </div>
        <br></br>
        <br></br>
     <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
