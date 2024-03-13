import "./Contact.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div className="mainContact" style={pageStyle}  initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            Contact
        </motion.div>
    );
}
