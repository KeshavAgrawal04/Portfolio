import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profileImage from "../../assets/profileImage.png";

const About = () => {
  return (
    <div id="about" className="py-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col
            md={6}
            className="text-center text-md-start d-flex justify-content-center align-items-center mt-5 h-100"
          >
            <motion.img
              src={profileImage}
              width={300}
              className="border rounded-circle mb-4 mb-md-0 d-none d-md-block"
              alt="logo"
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <motion.h1
              className="text-center text-md-start mb-5"
              style={{ margin: "0 auto" }}
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="heading">About Me</span>
            </motion.h1>
            <motion.p
              className="fs-4"
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              style={{ textAlign: "justify" }}
            >
              I&apos;m Keshav Agrawal, a BCA student with a strong interest in
              building full-stack applications using the MERN stack (MongoDB,
              Express.js, React.js, Node.js). I&apos;m eager to apply my skills
              to contribute to real-world projects as a MERN Stack Developer.
              Continuously honing my abilities, I am enthusiastic about
              launching a rewarding career in this dynamic field.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
