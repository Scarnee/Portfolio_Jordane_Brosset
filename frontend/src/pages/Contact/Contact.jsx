import "./Contact.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div className="mainContact" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <img alt="imageContact"></img>
            <div className="contactRight">
                <h1>Contact me</h1>
                <form className="contactForm" id="contactForm">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="" className="" />
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" />
                    <label htmlFor="story">Your Message</label>
                    <textarea id="story" name="story" rows="5" cols="33"></textarea>
                    <button type="submit" id="btnEnvoi" disabled className="disabled">
                        Contact me
                    </button>
                </form>
                <div className="socials">
                    <a href="https://github.com/Scarnee">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="linkedin.com/in/jordanebrosset">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
