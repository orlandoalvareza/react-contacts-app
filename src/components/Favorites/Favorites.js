import { useState } from "react";

import FavoritesList from "./FavoritesList";
import classes from './Favorites.module.css';

const Favorites= ({ contacts }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editStatusHandler = () => {
    setIsEditing(isEditing => !isEditing);
  }

  return (
    <div className={classes["favorites-container"]}>
      <div className={classes["favorites-header"]}>
        <h2>Favorites</h2>
        <button onClick={editStatusHandler}>{isEditing ? 'Cancel' : 'Edit'}</button>
      </div>
      <FavoritesList contacts={contacts} isEditing={isEditing}/>
    </div>
  )
}

export default Favorites;