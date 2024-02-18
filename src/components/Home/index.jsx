import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Home = () => {
    const handleDownload = (e) => {
        e.preventDefault();
    }

    return (
        <Container id="home" className="py-5">
            <Row className="align-items-center py-5">
                <Col md={6} className="text-center text-md-start">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="fs-1 mb-3">Hello 👋, It's Me</h2>
                        <h1 style={{ fontSize: '52px' }}>Keshav Agrawal</h1>
                        <h2 className="fs-1">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'MERN Stack Developer',
                                    2000,
                                    'Node JS Developer',
                                    1000,
                                    'React JS Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '32px', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="social-icons-home mt-2">
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
                        <motion.div

                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 btn btn-primary btn-lg"
                                onClick={handleDownload}
                            >
                                <FiDownload className="me-2" />
                                Download CV
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </Col>
                <Col md={6} className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="interactive-image"
                    >
                        <img src={logo} alt="logo" width={300} />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
