import "./Skills.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <motion.div className="mainSkills" style={pageStyle}  initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            Skills
        </motion.div>
    );
}
