import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contact from '../../assets/contact.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        alert('submitted');
    }

    return (
        <div id="contact" className="py-5 mb-5">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 d-none d-md-block">
                            <motion.img
                                src={contact}
                                alt="Contact Image"
                                className="img-fluid"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            />
                        </div>
                        <div className="col-md-6">
                            <motion.h1
                                className="text-center mb-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
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
                                            placeholder="" />
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
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
