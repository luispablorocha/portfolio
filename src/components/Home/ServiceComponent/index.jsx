import "./service.scss";
import { useRef } from "react";
import { animate, motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom';


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }

    }
}
const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className="services" variants={variants}
            initial="initial" animate="animate"
            whileInView={isInView}>
            <motion.div className="textContainer" variants={variants}>
                <p>I excel in both programming and design, creating visually captivating and user-friendly
                    <br />apps and websites.</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="../../src/assets/images/deco/people.webp"></img>
                    <h1>
                        <b>Creative</b> Ideas
                    </h1>

                </div>
                <div className="title">
                    <h1 style={{ justifyContent: "space-around" }}>
                        <b>Creative</b> Code
                    </h1>
                    <Link to="/portfolio"> <button className="button">What I do?</button></Link>
                </div>


            </motion.div>
            <motion.div className="listContainer mt-4" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Developer</h2>
                    <p>Crafting sleek and interactive websites with HTML, CSS, and JavaScript.
                    </p>
                    <p>Building responsive web solutions for a seamless user experience.
                    </p>
                    <Link to="/portfolio/0"><button className="button-check">GO</button></Link>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>App Developer</h2>
                    <p>Transforming ideas into engaging mobile solutions with a focus on user experience.
                    </p>
                    <p>Creating intuitive mobile experiences for iOS and Android platforms.</p>
                    <Link to="/portfolio/2"><button className="button-check">GO</button></Link>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Software Developer</h2>
                    <p>Transforming conceptual ideas into functional and impactful software solutions, prioritizing user experience at every stage of development.
                    </p>

                    <Link to="/portfolio/6"><button className="button-check">GO</button></Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;