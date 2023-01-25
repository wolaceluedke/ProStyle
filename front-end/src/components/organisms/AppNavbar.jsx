import AppModalLogin from "../molecules/AppModalLogin";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../imgs/Logo ProStyle/Logo-NAV.jpeg";
import ButtonSignUp from "../atoms/AppCadastro.jsx";

export default function OffcanvasExample() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3 background-black"
        >
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo ProStyle" className="logo-nav" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <NavDropdown
                    class=""
                    title="Roupas Masculinas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Camisas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Camisetas Longas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Regatas</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <AppModalLogin />
                  <ButtonSignUp />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
