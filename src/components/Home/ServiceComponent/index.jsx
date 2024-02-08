import "./service.scss";
import { useRef } from "react";
import { animate, motion, useInView } from 'framer-motion'


const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }

    }
}
const Services = () => {

    const ref= useRef();
    const isInView = useInView(ref,{margin:"-100px"})
    return (
        <motion.div className="services" variants={variants} 
        initial="initial" animate="animate"
        whileInView={isInView}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward</p>
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
                    <h1>
                        <b>Creative</b> Code
                    </h1>
                    <button 
                    className="button">What I do?</button>
                </div>
                
                
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>App Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button>GO</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;