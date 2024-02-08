import "./technologies.scss"
import { motion } from "framer-motion";
import dataLanguajes from '../../../data/technologies';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Technologies = () => {
    return (
        <div className="tec ml-8 mr-8 mb-8">
            <div className="ml-8 mr-8 flex flex-wrap justify-center gap-4">
                {dataLanguajes.map((data, index) => (
                    <motion.div
                        key={index}
                        className="box-tec"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <img src={data.image} className="imageL" alt={data.name} />
                    </motion.div>
                ))}
            </div>
        </div>


    )
}

export default Technologies;