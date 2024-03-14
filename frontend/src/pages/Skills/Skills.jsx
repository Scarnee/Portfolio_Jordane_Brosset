import "./Skills.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <motion.div className="mainSkills" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="codingSkills">
                <h1>Coding Skills</h1>
                <div className="iconList">
                    <div className="skill">
                        <i className="fa-brands fa-html5 "></i>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-sass"></i>
                        <p>SASS</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-js"></i>
                        <p>Javascript</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-node"></i>
                        <p>Node</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-react"></i>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <i className="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </div>
                    
                    <div className="skill">
                        <i className="fa-solid fa-database"></i>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>

            <div className="softSkills">
                <h1>Soft Skills</h1>
                <h2>Problem-solving</h2>
                <h2>Trilingual : English, French, Spanish</h2>
                <h2>Adaptability</h2>
            </div>
        </motion.div>
    );
}
