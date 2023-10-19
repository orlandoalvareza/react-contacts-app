import { useContext, useState } from "react";
import { motion } from "framer-motion";

import FavoritesList from "./FavoritesList";
import ThemeContext from "../../context/theme-context";
import classes from './Favorites.module.css';

const Favorites= ({ contacts }) => {
  const themeCtx = useContext(ThemeContext);
  const [isEditing, setIsEditing] = useState(false);

  const editStatusHandler = () => {
    setIsEditing(isEditing => !isEditing);
  }

  return (
    <motion.div
      className={
        themeCtx.isLightTheme
        ? classes["favorites-container__light"]
        : classes["favorites-container__dark"]
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={
          themeCtx.isLightTheme
          ? classes["favorites-header__light"]
          : classes["favorites-header__dark"]
        }
      >
        <h2>Favorites</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 600 }}
          onClick={editStatusHandler}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </motion.button>
      </div>
      <FavoritesList contacts={contacts} isEditing={isEditing}/>
    </motion.div>
  )
}

export default Favorites;