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
            Since 14/09/2015, up to now <br/>
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
                    I keep ears and eyes wide open to anomalies, perhaps dangers, answering them to my best.

                </ListGroup.Item>
                <ListGroup.Item>
                    I collaborate with my team and different services, so that we can spot, communicate, analyze, prevent and fix ...<br/>
                    deteriorations, dangers, incivilities or infrigments.

                </ListGroup.Item>
            </ListGroup>

            <h3 className="display-5 m-5">Administrative Employee</h3>

            <p>For the Administration of the Town of Péruwelz<br/>
            2014-2015<br/>
            In charge of the cartography and surveying the cemeteries of the town, and its informatization</p>

            <ListGroup>
                <ListGroup.Item>
                    I determined the boundaries of the mission I was deemed to accomplish and I organized myself to reach the objectives.

                </ListGroup.Item>
                <ListGroup.Item>
                    I ran through the cemeteries, drafted rough plans, took multiple pictures of every graves, and jot down about cryptic details.
                </ListGroup.Item>
                <ListGroup.Item>
                    I organized folders and excel files according to the rows of graves, then inputed all the informations I could gather for the administrative personnal of the Etat-Civil service.
                </ListGroup.Item>
                <ListGroup.Item>
                    I verified the informations before creating interactive maps to easen the communication between the administrative personnal (in the offices) and the gravediggers (in the field).
                </ListGroup.Item>
            </ListGroup>




        </Container>
    </Layout>    
);





export default Professional;