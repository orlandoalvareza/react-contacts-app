import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import classes from './Favorites.module.css';

const Favorites = ({ contacts }) => {
  const sortedContacts = contacts.sort((firstItem, secondItem) => (
    firstItem.name.localeCompare(secondItem.name)
  ));

  return (
    <div className={classes["favorites-container"]}>
      <div className={classes["favorites-header"]}>
        <h2>Favorites</h2>
        <button>Edit</button>
      </div>
      <ul className={classes["favorites-list"]}>
        {sortedContacts.map(contact => 
          <li key={contact.id}>
            <FontAwesomeIcon className={classes["contact-icon"]} icon={faCircleUser}/>
            <Link to={contact.id}>
              {contact.name}
            </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default Favorites;