import React, { Component } from "react";
import properties from "../assets/data.json";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loc: "",
      price: "",
      type: "",
      furnishing: "",
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}

  loc_filter = (event) => {
    this.setState({ loc: event.target.value });
  };

  price_filter = (event) => {
    this.setState({ price: event.target.value });
  };

  type_filter = (event) => {
    this.setState({ type: event.target.value });
  };

  furnishing_filter = (event) => {
    this.setState({ furnishing: event.target.value });
  };

  submit() {
    var data = properties;

    if (this.state.loc !== "") {
      data = properties.filter((property) =>
        property.location.includes(this.state.loc)
      );
    }

    if (this.state.price !== "") {
      data = data.filter(
        (property) =>
          property.price <= this.state.price &&
          property.price > this.state.price - 100000
      );
    }

    if (this.state.type !== "")
      data = data.filter((property) => property.type.includes(this.state.type));

    if (this.state.furnishing !== "")
      data = data.filter((property) =>
        property.furnishing.includes(this.state.furnishing)
      );

    data.sort((a, b) => {
      return b.view - a.view;
    });
    this.props.callback(data); //Pass filtered data to Property.js
  }

  render() {
    const location = [
      ...new Set(properties.map((properties) => properties.location)),
    ].sort();
    const type = [
      ...new Set(properties.map((properties) => properties.type)),
    ].sort();
    const furnishing = [
      ...new Set(properties.map((properties) => properties.furnishing)),
    ].sort();

    return (
      <div className="container d-flex justify-content-center">
        <select onChange={this.loc_filter}>
          <option value=""> Location </option>
          {location.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <select onChange={this.price_filter}>
          <option value=""> Price </option>
          <option value="200000"> RM200K BELOW </option>
          <option value="300000"> RM200K - RM300K </option>
          <option value="400000"> RM300K - RM400K </option>
          <option value="500000"> RM400K - RM500K </option>
          <option value="600000"> RM500K - RM600K </option>
          <option value="700000"> RM600K - RM700K </option>
          <option value="800000"> RM700K - RM800K </option>
          <option value="900000"> RM800K - RM900K </option>
          <option value="1000000"> RM900K - RM1000K </option>
          <option value="3000000"> RM1000K ABOVE </option>
        </select>
        <select onChange={this.type_filter}>
          <option value=""> Type </option>
          {type.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <select onChange={this.furnishing_filter}>
          <option value=""> Furnishing </option>
          {furnishing.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <button onClick={this.submit}>SEARCH</button>
      </div>
    );
  }
}
