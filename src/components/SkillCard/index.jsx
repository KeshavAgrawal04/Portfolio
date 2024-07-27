import { motion } from "framer-motion";
import "./skillCard.css";

const SkillCard = ({ icon, text }) => {
  return (
    <motion.div
      className="skill-card col-xl-2 col-lg-3 col-md-4 col-sm-5 col-10 card d-flex align-items-center justify-content-center px-5 py-5 mb-4"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ cursor: "pointer" }}
    >
      <div className="mb-2 z-1">{icon}</div>
      <div className="z-1">
        <h2
          style={{ letterSpacing: "2px", color: "#3586ff" }}
          className="font-size fw-bold text text-center"
        >
          {text}
        </h2>
      </div>
    </motion.div>
  );
};

export default SkillCard;
