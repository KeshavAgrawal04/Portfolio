import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      style={{ zIndex: "1000" }}
      expanded={expanded}
      className="bg-body-tertiary position-fixed w-100 top-0"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fs-2"
          style={{ color: "#3586ff" }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <BiMenu size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse style={{ zIndex: "2" }} id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 d-flex gap-2 justify-content-center mb-0">
            <Nav.Link
              href="#home"
              onClick={() => handleNavItemClick("home")}
              className={activeNavItem === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handleNavItemClick("about")}
              className={activeNavItem === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => handleNavItemClick("skills")}
              className={activeNavItem === "skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handleNavItemClick("projects")}
              className={activeNavItem === "projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handleNavItemClick("contact")}
              className={activeNavItem === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
