import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, ListGroup} from 'react-bootstrap'







const Professional= () => (
    <Layout>
        <SEO title="Professional Page" />
        <Container>


        
            <h3 className="display-5 m-5">Gardien de la Paix-Constatateur</h3>

            <p>For the Administration of the Town of Péruwelz<br/>
            Since 14/09/2015 up to now <br/>
            I carry out prevention and security missions for the service of prevention and security.
            </p>

            <ListGroup>
                <ListGroup.Item>
                    I do my best to be a reassuring presence, through a good presentation, great oral and written communication skills, and putting forward human and civil qualities.

                </ListGroup.Item>
                <ListGroup.Item>
                    I make myself available to the citizens, so I can inform them, help them, or sensitize them to the quirks of community life or security.

                </ListGroup.Item>
                <ListGroup.Item>
                    I keep ears and eyes wide open to anomalies

                </ListGroup.Item>
                <ListGroup.Item>

                </ListGroup.Item>
            </ListGroup>




        </Container>
    </Layout>    
);





export default Professional;