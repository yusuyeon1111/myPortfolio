import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';

function App() {
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -800]); // About가 위로 올라가는 거리

  const homeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="App">
      <motion.div
        className="home-wrapper"
        style={{ opacity: homeOpacity }}
      >
        <Home />
      </motion.div>

      <motion.div
        ref={aboutRef}
        style={{ y }}
        className="about-wrapper"
      >
        <About />
      </motion.div>
    </div>
  );
}

export default App;