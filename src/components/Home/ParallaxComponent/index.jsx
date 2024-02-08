import {useRef} from 'react'
import "./parallax.scss";
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax =()=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText=useTransform(scrollYProgress, [0,1], ["-80%","100%"]);
    const yBg=useTransform(scrollYProgress, [0,1], ["-200%","120%"]);
    return(
        <div className="parallax">
            <motion.h1 style={{y:yText}}>Technologies</motion.h1>
            
            <motion.div className="mountains">

            </motion.div>
            <motion.div style={{x:yBg}} className="planets">

            </motion.div>
            <motion.div style={{x:yBg}} className="stars">

            </motion.div>
        </div>
    )
}

export default Parallax;