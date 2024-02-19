import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        setExpanded(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const aboutOffset = document.getElementById('about').offsetTop;
        const skillsOffset = document.getElementById('skills').offsetTop;
        const projectsOffset = document.getElementById('projects').offsetTop;
        const contactOffset = document.getElementById('contact').offsetTop;

        const scrollPosition = window.scrollY + 80;

        if (scrollPosition < aboutOffset) {
            setActiveNavItem('home');
        } else if (scrollPosition >= aboutOffset && scrollPosition < skillsOffset) {
            setActiveNavItem('about');
        } else if (scrollPosition >= skillsOffset && scrollPosition < projectsOffset) {
            setActiveNavItem('skills');
        } else if (scrollPosition >= projectsOffset && scrollPosition < contactOffset) {
            setActiveNavItem('projects');
        } else {
            setActiveNavItem('contact');
        }
    };

    return (
        <Navbar expand="lg" style={{ zIndex: "1000" }} expanded={expanded} className="bg-body-tertiary position-fixed w-100 top-0">
            <Container >
                <Navbar.Brand href="#home" className="fs-2" style={{ color: "#3586ff" }}>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
                    <BiMenu size={30} />
                </ Navbar.Toggle>
                <Navbar.Collapse style={{ zIndex: "2" }} id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 d-flex gap-2 justify-content-center mb-0">
                        <Nav.Link href="#home" onClick={() => handleNavItemClick('home')} className={activeNavItem === 'home' ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => handleNavItemClick('about')} className={activeNavItem === 'about' ? 'active' : ''}>About</Nav.Link>
                        <Nav.Link href="#skills" onClick={() => handleNavItemClick('skills')} className={activeNavItem === 'skills' ? 'active' : ''}>Skills</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => handleNavItemClick('projects')} className={activeNavItem === 'projects' ? 'active' : ''}>Projects</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => handleNavItemClick('contact')} className={activeNavItem === 'contact' ? 'active' : ''}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
