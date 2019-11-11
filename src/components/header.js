import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"



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


      <Navbar expand="md" className="sticky-top">
        <Navbar.Brand style={{ color: `white`, textDecoration: `none`, }} href="/">
          {siteTitle}
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <NavDropdown title="Who am I?" id="basic-nav-dropdown" style={{ color: `white`, background: `#fa4b00`, textDecoration: `none` }}>
            <NavDropdown.Item className="m-3" as={Link} to="/summary/" style={{ color: `white`, background: `#fa4b00`, textDecoration: `none` }}>Who am I?</NavDropdown.Item>
            <NavDropdown.Item className="m-3" as={Link} to="/aboutme/" style={{ color: `white`, background: `#fa4b00`, textDecoration: `none` }}>About me</NavDropdown.Item>        
            <NavDropdown.Item className="m-3" as={Link} to="/moreaboutme/" style={{ color: `white`, background: `#fa4b00`, textDecoration: `none` }}>Even more</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Item className="m-3"><Link to="/professional/" style={{ color: `white`, textDecoration: `none`, }}>Work Experience</Link></Nav.Item>
          <Nav.Item className="m-3"><Link to="/stages/" style={{ color: `white`, textDecoration: `none`, }}>Stages</Link></Nav.Item>
          <Nav.Item className="m-3"><Link to="/technologies/" style={{ color: `white`, textDecoration: `none`, }}>Tech Stack</Link></Nav.Item>
          <Nav.Item className="m-3"><Link to="/contact/" style={{ color: `white`, textDecoration: `none`, }}>Contacts</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>


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
