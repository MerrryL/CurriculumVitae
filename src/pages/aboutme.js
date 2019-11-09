import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container} from 'react-bootstrap'







const Aboutme= () => (
    <Layout>
        <SEO title="Contact Page" />
        <Container>


        
            <h3 className="display-5 m-5">My name is Amory Delcampe</h3>
            <p>I'm currently working for the Administration of the Town of Péruwelz.<br/>
            I'm also pursuing for a third year in a row a bachelor in Informatics and Management at the EPS of Péruwelz.<br/>
            In the frame of this formation, I'm seeking for an analysis internship followed by a development internship.
            Are you the company I wanna do these stages with?            
            </p>
        </Container>
    </Layout>    
);





export default Aboutme;