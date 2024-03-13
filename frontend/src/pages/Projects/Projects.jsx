import "./Projects.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div className="mainProjects" style={pageStyle}  initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            Projects
        </motion.div>
    );
}
