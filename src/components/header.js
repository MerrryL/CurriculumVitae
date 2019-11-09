import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fa4b00`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}

      
    >


      <Navbar expand="md" sticky-top>
        <Navbar.Brand style={{ color: `white`, textDecoration: `none`, }} href="/">
          {siteTitle}
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        <Nav.Item><Link to="/summary/">Who am I?</Link></Nav.Item>
        <Nav.Item><Link to="/professional/">Work Experience</Link></Nav.Item>
        <Nav.Item><Link to="/stages/">Stages</Link></Nav.Item>
        <Nav.Item><Link to="/technologies/">Technologies</Link></Nav.Item>
        <Nav.Item><Link to="/aboutme/">About me</Link></Nav.Item>
        <Nav.Item><Link to="/moreaboutme/">Even more</Link></Nav.Item>
        <Nav.Item><Link to="/contact/">Contacts</Link></Nav.Item>


        </Nav>



        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav"><span class="navbar-toggler-icon"></span></Navbar.Toggle>


      </Navbar>








    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
