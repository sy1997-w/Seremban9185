import React, { Component } from "react";
import Property from "./property";
import { Jumbotron, Container} from 'react-bootstrap';

export default class Recommendation extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <Jumbotron fluid>
                    <Container className="bg-red" >
                       <h1>Recommendation Page</h1>
                    </Container>
                </Jumbotron>
                 <Property />
            </div>
            </div>
        );
    }
}