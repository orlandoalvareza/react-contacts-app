import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { favoriteMarked } from '../../util/http';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import classes from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  const setContactsList = useState(contacts)[1];

  const addFavoriteContactHandler = async (id) => {
    const selectedContact = contacts.filter(contact => contact.id === id);
    const editedContact = await favoriteMarked(id, selectedContact[0]);    

    setContactsList((prevContacts) => {
      const filteredContacts = prevContacts.filter(contact => (
        contact.id !== editedContact.id
      ));
      return [...filteredContacts, editedContact]
    });
  }

  return (
    <ul className={classes["contact-list"]}>
      {contacts.map(contact => 
        <li className={classes["list-item"]} key={contact.id}>
          <Link to={{
            pathname: `/contacts/${contact.id}`,
            search: `?from=contacts`
          }}>
            {contact.name}
          </Link>
          <div onClick={() => addFavoriteContactHandler(contact.id)}>
            <FontAwesomeIcon 
              className={classes["favorite-icon"]} 
              icon={contact.isFavorite === 'on' ? solidStar : regularStar} 
            />
          </div>
        </li>)}
        <li className={classes['total-contacts']}>
          {`You have ${contacts.length} contacts.`}
        </li>
    </ul>
  )
}

export default ContactsList;