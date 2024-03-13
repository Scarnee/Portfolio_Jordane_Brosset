import "./About.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div className="mainAbout" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            About
        </motion.div>
    );
}
