import React from 'react'
import {motion} from 'framer-motion'
import '../css/Home.css'
import About from './About'
function AnimateComponent() {
  return (
    <motion.div
          initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: -400 }}
            viewport={{ once: true , amount : 0.5 }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
    >
    </motion.div>
  )
}

export default AnimateComponent