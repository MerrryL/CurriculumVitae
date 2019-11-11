import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Tabs, Tab, Sonnet, Container} from 'react-bootstrap'







const Technologies= () => (
    <Layout>
        <SEO title="Contact Page" />
        <Container>        
            <h3 className="display-5 m-5">This website was made with the following technologies :</h3>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Gatsby" title="Gatsby">
                    <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
                    
                </Tab>
                <Tab eventKey="React" title="React">
                    <a href="https://reactjs.org/">React.js</a>
                </Tab>
                <Tab eventKey="Bootstrap" title="Bootstrap">
                    <a href="https://getbootstrap.com/">Bootstrap</a>
                    I actually used React-Boostrap, which is basically Boostrap remade with React :
                    <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>
                </Tab>

                <Tab eventKey="Github" title="Github">

                    
                    <a href="https://github.com/">Github</a>

                    <a href="https://git-scm.com/">Git</a>
                </Tab>
                <Tab eventKey="Netlify" title="Netlify">
                    <a href="https://www.netlify.com/">Netlify</a>
                </Tab>

                <Tab eventKey="Others" title="Others">
                    <a href="https://code.visualstudio.com/">VSCode</a>
                </Tab>
                <Tab eventKey="React-Native" title="React-Native (incoming)" disabled>
                    <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
                </Tab>
            </Tabs>



        </Container>
    </Layout>    
);





export default Technologies;