import React from 'react';
import ProjectCard from '../ProjectCard';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';

const Projects = () => {
    const projectsArray = [
        {
            name: "Appointment Booking System",
            description: "As a Backend Developer for Hospital Appointment Booking, I focus on implementing efficient technologies for seamless functionality. I've specialized in developing Admin and Patient APIs, contributing to a robust Hospital Management System (HMS).",
            coverImage: project1,
            preview: "http://localhost:3000",
            dates: "OCT 2023 - DEC 2023",
            technologies: ["Next JS", "Python", "Django"]
        },
        {
            name: "User Management System",
            description: "The User Management System API is designed to handle user-related operations, providing endpoints to manage user registration, authentication, profile management, and access control. Also authorized using JSON Web Token.",
            coverImage: project2,
            preview: "https://user-management-system-two.vercel.app/",
            dates: "DEC 2023",
            technologies: ["React JS", "Node JS"]
        },
        {
            name: "OGANI E-Commerce",
            description: "A responsive e-commerce website inspired by Colorlib's OGANI template. Built with HTML, CSS, and Bootstrap, it features a clean and modern UI design suitable for showcasing various products.",
            coverImage: project3,
            preview: "https://keshavagrawal04.github.io/Ogani-Ecommerce-Template/",
            dates: "AUG 2023",
            technologies: ["HTML", "CSS", "Bootstrap"]
        },
        {
            name: "Quiz Application",
            description: "A quiz application developed using HTML, CSS, and JavaScript. It allows users to answer multiple-choice questions and provides instant feedback. The application is designed to be simple and user-friendly.",
            coverImage: project4,
            preview: "https://keshavagrawal04.github.io/Quiz-Application/",
            dates: "OCT 2023 - DEC 2023",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Todo List Application",
            description: "A simple to-do list application built with HTML, CSS, Bootstrap, and JavaScript. It allows users to add, delete, and mark tasks as completed. The application features a responsive design and intuitive user interface.",
            coverImage: project5,
            preview: "https://keshavagrawal04.github.io/Todo-List-Application/",
            dates: "JAN 2023",
            technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"]
        }
    ];

    return (
        <div id="projects" className="py-5">
            <Container>
                <Row className="py-5">
                    <motion.h1
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="heading">Projects</span>
                    </motion.h1>
                </Row>
                <Row className="d-flex justify-content-center px-3">
                    {projectsArray.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
