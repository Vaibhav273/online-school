import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';


function Header() {
    return (
        <>
            <div className="menu-bg">
                <Container>
                    <Row>
                        <Col lg={2} xs={12} className="d-flex align-items-center p-0">
                            <img
                                src={logo}
                                className="align-top logo img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                        </Col>
                        <Col lg={10} xs={12} className="menu">
                            <Col xl={12} xs={12} className="pe-0">
                                <Navbar collapseOnSelect expand="lg">
                                    {/* <span>Menu</span> */}
                                    <Navbar.Toggle title="Menu" aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="ms-auto">
                                            <NavLink to="/" className="nav-link">
                                                Home
                                            </NavLink>
                                            <NavLink to="/courses" className="nav-link">
                                                Courses
                                            </NavLink>
                                            <NavLink className="nav-link" to="/about-us">
                                                About Us
                                            </NavLink>
                                            <NavLink className="nav-link" to="/faq">
                                                FAQs
                                            </NavLink>
                                            <NavLink className="nav-link" to="/contact-us">
                                                Contact Us
                                            </NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Col>
                    </Row>
                </Container >
            </div>
        </>
    );
}

export default Header;