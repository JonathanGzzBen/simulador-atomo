import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Link href="/" passHref>
          <Navbar.Brand>Velocidad Relativa</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Simulador</Nav.Link>
            </Link>
            <Link href="/Teoria" passHref>
              <Nav.Link>Teoría</Nav.Link>
            </Link>
            <Link href="/AcercaDe" passHref>
              <Nav.Link>Acerca De</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="pt-4 pb-4">
        <Row className="justify-content-center">
          <Col sm={10} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
