import "./Home.scss";
import { pageTransition } from "../../utils/transition_variants";
import { pageVariants } from "../../utils/transition_variants";
import { pageStyle } from "../../utils/transition_variants";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div className="mainHome" style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="homeContent">
                <div className="homeDescription">
                    <h1>Jordane Brosset</h1>
                    <h2>Web Developper</h2>
                </div>
                <img alt="Profile Picture" className="profilePicture"></img>
            </div>
        </motion.div>
    );
}
