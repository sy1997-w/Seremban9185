import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { Card } from "react-bootstrap";

export default class HouseCard extends Component {
  render() {
    return (
      <div className="container">
        <Card border={`${this.props.mv ? "danger" : "primary"} `}>
          <Card.Header>
            <Card.Title>
              <Link
                to={`/CardDetail/${this.props.property.id}`}
                target="_blank"
              >
                {this.props.property.location}
              </Link>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <img
              style={{ float: "right" }}
              src={require(`../assets/building.jpg`)}
              className="photo"
            />
            <Card.Title>{this.props.property.type}</Card.Title>
            <Card.Text>
              <p>
                RM{" "}
                {this.props.property.price
                  .toFixed(1)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                  .slice(0, -2)}
              </p>
              <p>{this.props.property.furnishing}</p>
              <p>
                <Link
                  to={`/CardDetail/${this.props.property.id}`}
                  target="_blank"
                >
                  For more information >>>{" "}
                </Link>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
