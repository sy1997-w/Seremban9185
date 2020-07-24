import React, { Component } from "react";
import properties from "../assets/data.json";
import HouseCard from "./HouseCard";
import Filter from "./Filter";
import Sort from "./Sort";

export default class Property extends Component {
  constructor(props) {
    super(props);
    this.state = { filtered_data: properties, localstorage: null };
  }

  componentDidMount() {}

  childcall = (
    val //Received from Filter.js
  ) => {
    this.setState({ filtered_data: val });
  };

  childcall2 = (
    val //Received from Filter.js
  ) => {
    this.setState({ filtered_data: val });
  };

  // render() {
  //     const list = this.state.filtered_data.map((property) => {
  //         return (
  //         <li key = {property.id}>
  //             <HouseCard property = {property} />
  //         </li>
  //         );
  //     });

  //     return (
  //         <div>
  //             <Filter callback={this.childcall}/>
  //             <br></br>
  //             {list}
  //         </div>
  //     );
  // }

  render() {
    const list = this.state.filtered_data.map((property) => {
      var most_viewed = false;
      var view = Math.max.apply(
        Math,
        this.state.filtered_data.map((o) => {
          return o.view;
        })
      );
      if (property.view === view) {
        most_viewed = true;
      }

      return (
        <li key={property.id}>
          <HouseCard property={property} mv={most_viewed} />
        </li>
      );
    });

    return (
      <div>
        <Filter callback={this.childcall} />
        <Sort
          properties={this.state.filtered_data}
          callback2={this.childcall2}
        />
        <br></br>
        {list}
      </div>
    );
  }
}
