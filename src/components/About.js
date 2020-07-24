import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';


const About = () => {
    return (
        <div>
        <div className="container">
        <Jumbotron fluid>
            <Container className="bg-red" >
                <h1>About</h1>
            </Container>
        </Jumbotron>
            <h3>Problem Statement</h3>
            <h6>For Buyer, there are lots of concerns and factors in consideration in order to make a 
                satisfiying decision before buying a property. The only reliable way they can achieve is
                consult the property agents. This requires plenty of times in discussing and identifying
                a suitable property for client according to their requests. Besides, for agents, to explain and describe a 
                property on paper to their clients is not an ideal way.  </h6>
            <hr></hr>
            <h3>Solution</h3>
            <h6>1. AR</h6>
            <p>An Web Augmented Reality(AR) machines is used. The clients are able to have an 
                interactive experience of a real-world environment of the property. In consultation, this helps the 
                clients to have better understanding about the property. </p>
            <h6>2. Gather User Data</h6>
            <p>Clients can apply the filter (choose their desired location, price, utilities, etc) and get recommendation from the system.
                This also can help IOI property collect the data and used as reference information for future improvement.
            </p>
            <p></p>
        </div>

        </div>
    );
}
 
export default About;