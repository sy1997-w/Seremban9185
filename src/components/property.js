import React, { Component } from "react";
import properties from '../assets/data.json';
import HouseCard from "./HouseCard";
import Filter from "./Filter";

export default class Property extends Component {

    constructor(props) {
        super(props);
        this.state = { filtered_data: properties, localstorage: null};
    }

    componentDidMount() {

    }
    
    childcall = (val) => //Received from Filter.js
    { 
        this.setState({filtered_data: val});
    }

    render() {
        const list = this.state.filtered_data.map((property) => { 
            return (
            <li key = {property.id}>
                <HouseCard property = {property} />
            </li>
            );
        });

        return (
            <div>
                <Filter callback={this.childcall}/>
                <br></br>
                {list}
            </div> 
        );
    }
}
