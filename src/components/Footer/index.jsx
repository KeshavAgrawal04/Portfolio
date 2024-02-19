import React from 'react';
import { MdEmail, MdCall } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './footer.css';

const Footer = ({ activeNavItem, setActiveNavItem }) => {

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    return (
        <>
            <motion.footer className="footer d-flex justify-content-center align-items-center flex-column pt-5">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icons position-relative d-flex justify-content-center align-items-center flex-wrap list-unstyled">
                    <li>
                        <a
                            href="https://github.com/keshavagrawal04"
                            target="_blank"
                        >
                            <FaGithub size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/keshavagrawal04"
                            target="_blank"
                        >
                            <FaLinkedin size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/keshavagrawal04"
                            target="_blank"
                        >
                            <FaTwitter size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/keshavagrawal04"
                            target="_blank"
                        >
                            <FaInstagram size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                        </a>
                    </li>
                </ul>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                    <p className="fs-5"><MdEmail size={28} /> keshava.bca2022@ssism.org</p>
                    <p className="fs-5"><MdCall size={28} /> +91 8965830154</p>
                </div>
                <ul className="menu">
                    <ul className="list-unstyled position-relative d-flex justify-content-center align-items-center flex-wrap">
                        <li><a href="#home" onClick={() => handleNavItemClick('home')} className={activeNavItem === 'home' ? 'active-f' : ''}>Home</a></li>
                        <li><a href="#about" onClick={() => handleNavItemClick('about')} className={activeNavItem === 'about' ? 'active-f' : ''}>About</a></li>
                        <li><a href="#skills" onClick={() => handleNavItemClick('skills')} className={activeNavItem === 'skills' ? 'active-f' : ''}>Skills</a></li>
                        <li><a href="#projects" onClick={() => handleNavItemClick('projects')} className={activeNavItem === 'projects' ? 'active-f' : ''}>Projects</a></li>
                        <li><a href="#contact" onClick={() => handleNavItemClick('contact')} className={activeNavItem === 'contact' ? 'active-f' : ''}>Contact</a></li>
                    </ul>
                </ul>
                <p className="text-center mt-1 fs-5">&copy; {new Date().getFullYear()} Keshav Agrawal | All Rights Reserved.</p>
            </motion.footer>
        </>
    );
}

export default Footer;
