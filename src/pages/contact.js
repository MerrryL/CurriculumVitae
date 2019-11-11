import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col, Card, CardDeck, Image} from 'react-bootstrap'

import Facebook from '../images/social/facebook.png'
import LinkedIn from '../images/social/linkedin.png'
import Twitter from '../images/social/twitter.png'
import Peruwelz from '../images/others/peruwelz.jpg'





const Contact= () => (
    <Layout>
        <SEO title="Contact Page" />


        <Container>
            <h1 className="display-3 mb-2">Are you sure you want to contact me?!?</h1>
            <h2 className="display-4 m-2">You were warned... ;D</h2>
            <Row>
                <Col xs={12} sm={6} lg={3} className="p-2">
                    <Card className="w-100 h-100 d-inline-block" border="primary">
                        <Card.Body className="h-100 d-inline-block">
                            <Card.Title>Where I live :</Card.Title>
                            <Card.Text>
                                Petite Place 5/11<br/>
                                7600 Péruwelz
                            </Card.Text>
                            <Card.Img variant='bottom' src={Peruwelz}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="p-2">
                    <Card className="w-100 h-100 d-inline-block" border="primary">
                        <Card.Body className="h-100 d-inline-block">
                            <Card.Title>Phone Number:</Card.Title>
                            <Card.Text>
                                +32498/27.73.76
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="p-2">
                    <Card className="w-100 h-100 d-inline-block" border="primary">
                        <Card.Body className="h-100 d-inline-block">
                            <Card.Title>Email Adress</Card.Title>
                            <Card.Text>
                                Amo168@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3} className="p-2">
                    <Card className="w-100 h-100 d-inline-block" border="primary">
                        <Card.Body className="h-100 d-inline-block">
                            <Card.Title>Social</Card.Title>
                            <Card.Text>
                                <Image src={Facebook} style={{ width: '25px' }}/><a href="https://www.facebook.com/DelcampeAmory"><span className="align-top">&nbsp; Facebook</span></a><br/>
                                <Image src={Twitter} style={{ width: '25px' }}/><a href="https://twitter.com/AmoryDelcampe"><span className="align-top">&nbsp; Twitter</span></a><br/>
                                <Image src={LinkedIn} style={{ width: '25px' }}/><a href="https://www.linkedin.com/in/amory-delcampe-b21536194/"><span className="align-top">&nbsp; LinkedIn</span></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h3 className="display-5 m-5">Anyway ... Thanks for your interest, it means a lot!</h3>

            <h3 className="text-muted">PS: My classmates also have curriculum vitae :</h3>

            <ul>
                <li><a href="#">Robert Dessoy</a></li>
                <li><a href="#">LUIGI</a></li>
                <li><a href="#">Kevin Vanstraceele</a></li>
            </ul>
        </Container>
    </Layout>    
);





export default Contact;