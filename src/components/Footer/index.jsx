import { MdEmail, MdCall } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        className="footer d-flex justify-content-center align-items-center flex-column pt-5 p-4"
        style={{ backgroundColor: "#3586ff", color: "white" }}
      >
        <ul className="social-icons position-relative d-flex justify-content-center align-items-center flex-wrap list-unstyled">
          <li>
            <a href="https://github.com/keshavagrawal04" target="_blank">
              <FaGithub
                size={30}
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/keshavagrawal04" target="_blank">
              <FaLinkedin
                size={30}
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/keshavagrawal04" target="_blank">
              <FaTwitter
                size={30}
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/keshavagrawal04" target="_blank">
              <FaInstagram
                size={30}
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <p className="fs-5">
            <MdEmail size={28} /> keshavagrawal1123@gmail.com
          </p>
          <p className="fs-5">
            <MdCall size={28} /> +91 8965830154
          </p>
        </div>
        <p className="text-center mt-1 fs-5">
          &copy; {new Date().getFullYear()} Keshav Agrawal
        </p>
      </motion.footer>
    </>
  );
};

export default Footer;
