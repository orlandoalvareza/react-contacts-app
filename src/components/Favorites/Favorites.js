import { useState } from "react";
import { motion } from "framer-motion";

import FavoritesList from "./FavoritesList";
import classes from './Favorites.module.css';

const Favorites= ({ contacts }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editStatusHandler = () => {
    setIsEditing(isEditing => !isEditing);
  }

  return (
    <motion.div
      className={classes["favorites-container"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes["favorites-header"]}>
        <h2>Favorites</h2>
        <button onClick={editStatusHandler}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <FavoritesList contacts={contacts} isEditing={isEditing}/>
    </motion.div>
  )
}

export default Favorites;