import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  let animationDelay = 0;

  return (
    <ul className={classes["contact-list"]}>
      {contacts.map(contact => {
        animationDelay += 0.05;
        return (
          <motion.li 
            className={classes["list-item"]} 
            key={contact.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', delay: animationDelay }}
          >
            <Link to={{
              pathname: `/contacts/${contact.id}`,
              search: `?from=contacts`
            }}>
              {contact.name}
            </Link>
            <motion.div 
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 600 }}
              onClick={() => addFavoriteContactHandler(contact.id)}
            >
              <FontAwesomeIcon 
                className={classes["favorite-icon"]} 
                icon={contact.isFavorite === 'on' ? solidStar : regularStar} 
              />
            </motion.div>
          </motion.li>
        )
      })}
      <li className={classes['total-contacts']}>
        {`You have ${contacts.length} contacts.`}
      </li>
    </ul>
  )
}

export default ContactsList;