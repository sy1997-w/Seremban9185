import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);
  }

  sort = (event) => {
    var data = this.props.properties;
    var cond = event.target.value;

    switch (cond) {
      case "popular":
        data.sort((a, b) => {
          return b.view - a.view;
        });
        break;
      case "p_low":
        data.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case "p_high":
        data.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "s_low":
        data.sort((a, b) => {
          return a.size - b.size;
        });
        break;
      case "s_high":
        data.sort((a, b) => {
          return b.size - a.size;
        });
        break;
      case "":
        data.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      default:
        break;
    }
    this.props.callback2(data); //Pass filtered data to Property.js
  };

  render() {
    return (
      <div>
        <p>Sort By</p>
        <select onChange={this.sort}>
          <option value=""> -- </option>
          <option value="popular"> Porpularity </option>
          <option value="p_low"> Price: Low to High </option>
          <option value="p_high"> Price: High to Low </option>
          <option value="s_low"> Size: Low to High </option>
          <option value="s_high"> Size: High to Low </option>
        </select>
      </div>
    );
  }
}
