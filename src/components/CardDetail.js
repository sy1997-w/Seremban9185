import React, { Component } from "react";
import properties from '../assets/data.json';
import {Row,Col, Card,ListGroup,ListGroupItem,Container} from 'react-bootstrap';
import '../style.css';


export default class CardDetail extends Component {

    render() {
        const property = properties[this.props.match.params.id];
        return (
            <div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                   
                    <Container>
                    <h1>{property.location}</h1>
                <Row>
                    
                <Col xs={6}>
                    <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={require(`../assets/building.jpg`)}  />
                    </Card></Col>
                <Col xs={6}>                
                <Card >
                            <Card.Body>
                                    <Card.Title>About this property:</Card.Title>
                                    <Card.Text>
                                    <h6>Location: {property.location}</h6>
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Price: RM {property.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -2) }</ListGroupItem>
                                    <ListGroupItem>Type: {property.type}</ListGroupItem>
                                    <ListGroupItem>Size: {property.size}</ListGroupItem>
                                    <ListGroupItem><p>Furnishing: {property.furnishing}</p></ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Text>Room: {property.room}</Card.Text>
                                    <Card.Text>Bathroom: {property.bathroom}</Card.Text>
                                    <Card.Text>Carpark: {property.carpark}</Card.Text>
                            </Card.Body>
                    </Card></Col>
                 </Row>
                 </Container>

                    
                   
                </div>
            </div>
        );
    }
}
