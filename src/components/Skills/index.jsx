import React from 'react';
import SkillCard from '../SkillCard';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaAws } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
    const skillsArray = [
        { icon: <FaHtml5 style={{ fontSize: "5rem" }} />, text: "HTML" },
        { icon: <FaCss3Alt style={{ fontSize: "5rem" }} />, text: "CSS" },
        { icon: <IoLogoJavascript style={{ fontSize: "5rem" }} />, text: "JavaScript" },
        { icon: <FaBootstrap style={{ fontSize: "5rem" }} />, text: "Bootstrap" },
        { icon: <FaReact style={{ fontSize: "5rem" }} />, text: "React JS" },
        { icon: <FaNode style={{ fontSize: "5rem" }} />, text: "Node JS" },
        { icon: <SiExpress style={{ fontSize: "5rem" }} />, text: "Express JS" },
        { icon: <DiMongodb style={{ fontSize: "5rem" }} />, text: "MongoDB" },
        { icon: <FaGitAlt style={{ fontSize: "5rem" }} />, text: "Git" },
        { icon: <FaAws style={{ fontSize: "5rem" }} />, text: "AWS" }
    ];

    return (
        <motion.div
            id="skills"
            className="py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Container>
                <Row className="justify-content-center">
                    <motion.h1
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Skills
                    </motion.h1>
                </Row>
                <Row className="d-flex justify-content-center gap-4">
                    {skillsArray.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            text={skill.text}
                        />
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
}

export default Skills;
