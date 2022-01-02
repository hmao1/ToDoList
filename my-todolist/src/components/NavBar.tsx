import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLgoin } from "../redux/features/auth/authSlice";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

const NavBar = () => {
  const isLogin = useSelector(selectIsLgoin);
  return (
    <>
      {isLogin ? (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>To-Do-List</Navbar.Brand>
            <span style={{ color: "white" }}>Welcome!</span>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              To-do-list
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/signup"}>
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default NavBar;
