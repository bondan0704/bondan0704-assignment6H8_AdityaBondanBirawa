import { Navbar, Container, Form, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" style={{ padding: "20px" }}>
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2">
          AdityaFilmH8
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search..." className="me-2 fs-6" aria-label="Search" />
          <Button variant="light">SEARCH</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
