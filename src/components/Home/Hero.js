import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import classes from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();

  const scaleText = useTransform(scrollY, [0, 300], [1, 1.1]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 100, 150, 220]);
  const opacityHero = useTransform(
    scrollY,
    [0, 400, 450, 500, 600], 
    [1, 0.8, 0.8, 0.6, 0]
  );

  return (
    <motion.div style={{ opacity: opacityHero }} className={classes["hero-container"]}>
      <motion.div style={{ scale: scaleText, y: yText }} className={classes["hero-content"]}>
        <h1>Welcome to TouchBase</h1>
        <h3>Where Contacts Become Connections</h3>
        <Link to='/contacts'>Get Started</Link>
      </motion.div>
    </motion.div>
  )
}

export default Hero;