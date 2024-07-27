import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo_navbar from '../../images/logo4.png'
import './navbar_styles.css'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import pdf from '../../Documents/Calendariolove.pdf'
import instagramLogo from '../../images/instagram2.png'
import facebookLogo from '../../images/facebook-logo2.png'
import youtubeLogo from '../../images/youtube2.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img id='logo_nav' src={logo_navbar} alt='AD Mog'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
        <Nav>
          <NavDropdown title="A Igreja" id="basic-nav-dropdown" className='links'>
            <NavDropdown.Item href="/about" className='drop_item'>Sobre nossa Igreja</NavDropdown.Item>
            <NavDropdown.Item href={pdf} className='drop_item'>Agenda 2024</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Palavra do Pastor" id="basic-nav-dropdown" className='links'>
            <NavDropdown.Item href="/" className='drop_item'>
              <div className="ratio video">
                <iframe
                  src="https://www.youtube.com/embed/9zgROLiRIOU?si=3OhVqmDXmLamz1pk"  
                  title="YouTube video" 
                  allowFullScreen
                />
              </div>
            </NavDropdown.Item>
            <NavDropdown title="Mensagens" id="basic-nav-dropdown" className='links'>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=My5DAZ_swnc&t=9s" className='drop_item msg' target='_blanck'>
                  <FaPlayCircle/> Ter Segurança em Deus
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=gj58hDHvt8A" className='drop_item msg' target='_blanck'>
                  <FaPlayCircle/> Jesus Cristo Acalma a Tempestade
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=lZeoJ96vmh8&t=55s" className='drop_item msg' target='_blanck'>
                  <FaPlayCircle/> Essa é a Vitória que Vence o Mundo, A nossa Fé 
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
            <Nav.Link href='/ebd' className='links'>EBD</Nav.Link>
            <Nav.Link href='/contact' className='links'>Fale Conosco</Nav.Link>
          </Nav>
          <div className='redes'>
            <Link to="https://www.facebook.com/ad.mogiana.1" target='_blanck'><img src={facebookLogo} className='icons facebookLogo' alt='redes sociais'/></Link>
            <Link to="https://www.instagram.com/admogiana/" target='_blanck'><img src={instagramLogo} className='icons instagramLogo' alt='redes sociais'/></Link>
            <Link to="https://www.youtube.com/@pastornelioalvesdasilva6229" target='_blanck'><img src={youtubeLogo} className='icons youtubeLogo' alt='redes sociais'/></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header