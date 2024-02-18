import React from 'react';
import { MdEmail, MdCall } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './footer.css';

const Footer = ({ activeNavItem, setActiveNavItem }) => {

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        setExpanded(false);
    };

    return (
        <>
            {/* <motion.footer
                className="bg-light text-dark py-4"
                initial={{ marginTop: 50 }}
                animate={{ marginTop: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 120 }}
            >
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-5 mx-auto">
                            <h5 className="fw-bold fs-4">Explore</h5>
                            <ul className="list-unstyled fs-5">
                                <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
                                <li><a href="#about" className="text-dark text-decoration-none">About</a></li>
                                <li><a href="#skills" className="text-dark text-decoration-none">Skills</a></li>
                                <li><a href="#projects" className="text-dark text-decoration-none">Projects</a></li>
                                <li><a href="#contact" className="text-dark text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 mx-auto">
                            <h5 className="fw-bold fs-4">Contact Me</h5>
                            <p className="mb-1 fs-5"><MdEmail size={28} /> keshava.bca2022@ssism.org</p>
                            <p className="fs-5"><MdCall size={28} /> +91 8965830154</p>
                            <div className="social-icons mt-0">
                                <motion.a
                                    href="https://github.com/keshavagrawal04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaGithub size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com/in/keshavagrawal04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaLinkedin size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                                </motion.a>
                                <motion.a
                                    href="https://twitter.com/keshavagrawal04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaTwitter size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                                </motion.a>
                                <motion.a
                                    href="https://instagram.com/keshavagrawal04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaInstagram size={30} style={{ marginRight: '20px', cursor: 'pointer' }} />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 bg-dark" />
                    <div className="text-center fs-4">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Keshav Agrawal. All Rights Reserved.</p>
                    </div>
                </div>
            </motion.footer> */}
            <motion.footer className="footer d-flex justify-content-center align-items-center flex-column">
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
                        <li><a href="#home" onClick={() => handleNavItemClick('home')} className={activeNavItem === 'home' ? 'active' : ''}>Home</a></li>
                        <li><a href="#about" onClick={() => handleNavItemClick('about')} className={activeNavItem === 'about' ? 'active' : ''}>About</a></li>
                        <li><a href="#skills" onClick={() => handleNavItemClick('skills')} className={activeNavItem === 'skills' ? 'active' : ''}>Skills</a></li>
                        <li><a href="#projects" onClick={() => handleNavItemClick('projects')} className={activeNavItem === 'projects' ? 'active' : ''}>Projects</a></li>
                        <li><a href="#contact" onClick={() => handleNavItemClick('contact')} className={activeNavItem === 'contact' ? 'active' : ''}>Contact</a></li>
                    </ul>
                </ul>
                <p className="text-center mt-1 fs-5">&copy; {new Date().getFullYear()} Keshav Agrawal | All Rights Reserved.</p>
            </motion.footer>
        </>
    );
}

export default Footer;
