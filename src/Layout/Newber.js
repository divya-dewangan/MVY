import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Newber() {
  return (
    <>
    <Navbar style={{ backgroundColor: "#FF8E56" }} data-bs-theme="dark">
                        <Container>
                            {/* <Navbar.Brand href="#home">मुख्य पृष्ठ</Navbar.Brand> */}
                            <Nav className="me-auto text-bold">
                                <Nav.Link to={Link} href="/home">मुख्य पृष्ठ</Nav.Link>
                                <Nav.Link to={Link} href="/application-status">आवेदन की स्थिति</Nav.Link>
                                <Nav.Link to={Link} href="/application-status">अनंतिम सूची</Nav.Link>
                                <Nav.Link href="#application">आवेदन पत्र</Nav.Link>
                                <Nav.Link href="#affidavit">शपथ पत्र</Nav.Link>
                                <Nav.Link href="#governmentOrder">छ.ग. शासन द्वारा जारी आदेश</Nav.Link>
                                <Nav.Link href="#contect">संपर्क</Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
    </>
  )
}

export default Newber