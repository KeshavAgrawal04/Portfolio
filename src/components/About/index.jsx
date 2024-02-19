import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const About = () => {
    return (
        <div id="about" className="py-5">
            <Container>
                <Row className="align-items-center py-5">
                    <Col md={6} className="text-center text-md-start">
                        <motion.img
                            src={logo}
                            className="border rounded-circle mb-4 mb-md-0 d-none d-md-block"
                            alt="logo"
                            width={"300px"}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Col>
                    <Col md={6} className="d-flex flex-column align-items-center align-items-md-start">
                        <motion.h1
                            className="text-center text-md-start mb-5"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ margin: '0 auto' }}
                        >
                            <span className="heading">About Me</span>
                        </motion.h1>
                        <motion.p
                            className="fs-4"
                            style={{ textAlign: "justify" }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            I am currently pursuing BCA with a good understanding of backend development.
                            My short-term goal is to become a Backend Developer, and my long-term goal is
                            to become a Full Stack Developer. I have a passion for technology and continuously
                            improve my skills. I am excited to start my career in a field that I am passionate
                            about. I am familiar with technologies such as JavaScript, Node.js, Express, and MongoDB.
                        </motion.p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
