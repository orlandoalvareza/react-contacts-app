import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { favoriteMarked } from '../../util/http';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import classes from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  const sortedContacts = contacts.sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));

  const addFavoriteContactHandler = (id) => {
    const selectedContact = contacts.filter(contact => contact.id === id);

    if (selectedContact[0].isFavorite === 'on') {
      selectedContact[0].isFavorite = 'off';
    } else {
      selectedContact[0].isFavorite = 'on';
    }
    
    favoriteMarked(id, selectedContact[0]);
  }

  return (
    <ul className={classes["contact-list"]}>
      {sortedContacts.map(contact => 
        <li key={contact.id}>
          <Link to={contact.id}>
            {contact.name}
          </Link>
          <div onClick={() => addFavoriteContactHandler(contact.id)}>
            <FontAwesomeIcon 
              className={classes["favorite-icon"]} 
              icon={contact.isFavorite === 'on' ? solidStar : regularStar} 
            />
          </div>
        </li>)}
    </ul>
  )
}

export default ContactsList;