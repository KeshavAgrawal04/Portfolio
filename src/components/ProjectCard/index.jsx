import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="col-md-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card p-4 d-flex flex-column align-items-center justify-content-center shadow"
        style={{ minHeight: "400px", borderRadius: "10px", cursor: "pointer" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={project.coverImage}
          alt="coverImage"
          className="mb-3"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
        />
        <h2 className="fs-5 text-center fw-bold mb-3">{project.name}</h2>
        <p
          className="fs-6 mb-3 description"
          style={{
            lineHeight: "1.5",
            textAlign: "justify",
            maxHeight: "120px",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="mb-3">
          <p className="fw-bold text-center">Technologies Used</p>
          <div className="d-flex flex-wrap">
            {project.technologies.map((technology, index) => (
              <span key={index} className="badge bg-secondary me-2 mb-2">
                {technology}
              </span>
            ))}
          </div>
        </div>
        <p className="fw-bold mb-3">{project.dates}</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-1 btn btn-primary btn-lg"
          href={project.preview}
          target="_blank"
        >
          <AiOutlineEye className="me-2" />
          Preview
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
