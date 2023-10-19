import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import ThemeContext from '../../context/theme-context';
import classes from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const { isLightTheme } = useContext(ThemeContext);

  const scaleText = useTransform(scrollY, [0, 300], [1, 1.1]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 100, 150, 220]);
  const opacityHero = useTransform(
    scrollY,
    [0, 400, 450, 500, 600], 
    [1, 0.8, 0.8, 0.6, 0]
  );

  const themeMode = isLightTheme ? 'light' : 'dark'

  return (
    <motion.div 
      className={classes[`hero-container__${themeMode}`]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ opacity: opacityHero }} 
    >
      <motion.div 
        className={classes[`hero-content__${themeMode}`]}
        style={{ scale: scaleText, y: yText }} 
      >
        <h1>Welcome to TouchBase</h1>
        <h3>Where Contacts Become Connections</h3>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Link to='/contacts'>Get Started</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero;