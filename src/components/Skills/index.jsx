import SkillCard from "../SkillCard";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiGithub } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  const cardStyle = {
    fontSize: "4rem",
    color: "#3586ff",
  };

  const skillsArray = [
    { icon: <FaHtml5 className="icon" style={cardStyle} />, text: "HTML" },
    { icon: <FaCss3Alt className="icon" style={cardStyle} />, text: "CSS" },
    {
      icon: <IoLogoJavascript className="icon" style={cardStyle} />,
      text: "JavaScript",
    },
    {
      icon: <SiTypescript className="icon" style={cardStyle} />,
      text: "TypeScript",
    },
    {
      icon: <FaBootstrap className="icon" style={cardStyle} />,
      text: "Bootstrap",
    },
    {
      icon: <SiTailwindcss className="icon" style={cardStyle} />,
      text: "Tailwindcss",
    },
    { icon: <FaReact className="icon" style={cardStyle} />, text: "React JS" },
    { icon: <FaNode className="icon" style={cardStyle} />, text: "Node JS" },
    {
      icon: <SiExpress className="icon" style={cardStyle} />,
      text: "Express JS",
    },
    { icon: <DiMongodb className="icon" style={cardStyle} />, text: "MongoDB" },
    { icon: <FaGitAlt className="icon" style={cardStyle} />, text: "Git" },
    { icon: <SiGithub className="icon" style={cardStyle} />, text: "GitHub" },
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
        <Row className="justify-content-center py-5">
          <motion.h1
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="heading">Skills</span>
          </motion.h1>
        </Row>
        <Row className="d-flex justify-content-center gap-4">
          {skillsArray.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} text={skill.text} />
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Skills;
