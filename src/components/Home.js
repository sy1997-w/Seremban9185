import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import { Image,Jumbotron, Container, Card, CardColumns} from 'react-bootstrap';
import '../style.css';
import { Navbar, Nav, NavDropdown, ResponsiveEmbed } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div>
                         <Container>
                <br></br>
                <br></br>
                    <h1>Dream House</h1>
                   
                    <h5>Want to find your dream home? We take a look at four real estate search services to help you in that endeavor.</h5>
                    <Image src="https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_1280.jpg" fluid />
                <br></br>
                <br></br>
                <br></br>
                <hr class="my-4" />
                <br></br>
                <br></br>
                <br></br>
                    <h1 class="display-4 text-center">We Have AR!</h1>
                        <p class="lead text-center">Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory</p>

                        <div class="container">
                            <div class="row">
                                        <div class="col text-center">
                                        <Link to="/arview">
                                            <button type="button" class="btn btn-outline-dark  btn-lg">Try AR Now</button>
                                        </Link>
                                        </div>
                                </div>
                        </div>
                <br></br>
                <br></br>
                <br></br>
              

                <hr class="my-4" /> 
                <br></br>
                <br></br>
                <br></br>
                <div><h3 class="text-center">Reviews</h3></div>
                <br></br>
                <CardColumns>
                    <h1>Get your dream house today!</h1>
                    <h2>what are you WAITING</h2>
                    <h3>for?</h3>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg" />
                        <Card.Body>
                        <Card.Title>Gems Residences</Card.Title>
                        <Card.Text>
                            Peaceful environmental, fresh air and comfortable residential. I like IOI Properties infrastructure.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Convenience to commute to office in Putrajaya. The layout of the property is quite nice and properly planned.
                            LIVE.LIFE is more than just a campaign by IOI Properties, it’s the launch of a lifestyle. Not just any lifestyle, it is about living life - Braver. Bolder. Open. Inclusive. Energetic. Powerful.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Ms Noor Shifrah  <cite title="Source Title">from The Clio 2 Residences</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg" />
                        <Card.Body>
                        <Card.Title>Live.Life!</Card.Title>
                        <Card.Text>
                        That’s why we want to champion YOU so you can live your own life doing what YOU want.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">YOLO!</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                        The unit is amazing! It has a strategic location for people who want a peaceful and green environment, at the same time nearby of Klang Valley.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Ahmad<cite title="Source Title">Alanis</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                        <Card.Title>Bill Rodgers</Card.Title>
                        <Card.Text>
                        The best version of yourself is already there, all you have to do is catch up and LIVE.LIFE Active.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" />
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                        I can make a better choice due to the assistance of AR technology. The environment
                        is present 100% in my eyes. This helps me have better understanding to the property!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Brian Taylor<cite title="Source Title">NuenQ</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    
                    <Card>
                        <Card.Body>
                        <Card.Title>The Ideal Home</Card.Title>
                        <Card.Text>
                        OI Palm City is the first mega scale urban mixed-use development project invested by IOI Properties Malaysia in China. IOI Palm City has been in the core area of Jimei New City, Xiamen where the mega scale business travel and leisure shopping mall, boutique offices, waterfront mansions, five stars hotel, office premises have converged.

The project has occupied a total land area of hundreds of acres, whereby the project built-up area is more than a million square meters; the total investment is expected to be over RMB 8 Billion Yuan.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">13 June 2023</small>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardColumns>
                </Container>
            </div>
        );
    }
}
