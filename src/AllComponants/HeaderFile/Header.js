import React from 'react';
import 'animate.css';
import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div id='Home'>
                <Navbar collapseOnSelect expand="lg" className='nave-style animate__animated animate__fadeInDown'>
                    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
                    <Container>
                        <Navbar.Brand href="#home">
                            <img style={{ width: 45 }} src="https://www.free-css.com/assets/files/free-css-templates/preview/page278/ollie/assets/imgs/brand.svg" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Nav.Link className='link-style' href="#Home">Home</Nav.Link>
                                <Nav.Link className='link-style' href="#about">About</Nav.Link>
                                <Nav.Link className='link-style' href="#PortFolio">PortFolio</Nav.Link>
                                <Nav.Link className='link-style' href="#AboutME">About-Me</Nav.Link>
                                <Nav.Link className='link-style' href="#deets">Blog</Nav.Link>
                                <Nav.Link className='link-style' href="#contact-us">Contact</Nav.Link>
                                <Nav.Link className='link-style' href="#deets">Component</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="main animate__animated animate__zoomIn">
                <div className='header-info-div'>
                    <div className='header-info'>
                        <h2>We Make</h2>
                        <h2>Creative Design</h2>
                        <button>Learn More</button>
                    </div>

                    <div className='contact-info row'>
                        <div className="col-lg-6">
                            <h5>Are locking for</h5>
                            <h2>Lorem inpsum</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptatibus.</p>
                        </div>
                        <div className="row col-lg-6 text-center">
                            <div className="col-6">
                                <p> (123) 456-7890</p>
                                <p>info@domain.com</p>
                            </div>
                            <div className="col-6">
                                <p>Social Media</p>
                                <p>icone</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;