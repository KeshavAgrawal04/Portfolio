import { useState } from "react";
import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";
import contact from "../../assets/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <motion.div
      id="contact"
      className="py-5"
      variants={{
        show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
      }}
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-6">
            <motion.h1
              className="text-center mb-5"
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
              <span className="heading">Contact Me</span>
            </motion.h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder=""
                    value={name}
                    onChange={handleNameChange}
                  />
                  <label htmlFor="name">Enter your name</label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    id="email"
                    placeholder=""
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder=""
                    id="message"
                    style={{ height: "150px", resize: "none" }}
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <label htmlFor="message">Enter your message</label>
                </div>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.4 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  className="btn btn-primary btn-md"
                >
                  <BiSend size={20} style={{ marginRight: "5px" }} /> Send Email
                </motion.button>
              </motion.div>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <motion.img
              variants={{
                hidden: { opacity: 0, x: 50, y: 0 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
              src={contact}
              alt="Contact Image"
              className="img-fluid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
