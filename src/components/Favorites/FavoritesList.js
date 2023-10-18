import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { favoriteMarked } from '../../util/http';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './FavoritesList.module.css';

const FavoritesList = ({ contacts, isEditing }) => {
  const [contactsList, setContactsList] = useState(contacts);

  const addFavoriteContactHandler = async (id) => {
    const selectedContact = contacts.filter(contact => contact.id === id);
    const editedContact = await favoriteMarked(id, selectedContact[0]);

    setContactsList((prevContacts) => {
      const filteredContacts = prevContacts.filter(contact => (
        contact.id !== editedContact.id
      ));
      return [...filteredContacts]
    });
  }

  let animationDelay = 0;

  return (
    <Fragment>
      {contactsList.length !== 0 && (
        <ul className={classes["favorites-list"]}>
          {contactsList.map(contact => {
            animationDelay += 0.12;
            return (
              <motion.li
                key={contact.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', delay: animationDelay }}
              >
                <div className={classes["contact-info-container"]}>
                  {contact.photo && <img src={contact.photo} alt='contact'/>}
                  {!contact.photo && (
                    <FontAwesomeIcon 
                      className={classes["contact-icon"]} 
                      icon={faCircleUser}
                    />
                  )}
                  <Link to={{
                    pathname: `/contacts/${contact.id}`,
                    search: `?from=favorites`
                  }}>
                    {contact.name}
                  </Link>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  onClick={() => addFavoriteContactHandler(contact.id)}
                >
                  {isEditing && (
                    <FontAwesomeIcon 
                      className={classes["x-mark-icon"]} 
                      icon={faCircleXmark}
                    />
                  )}
                </motion.div>
              </motion.li>
            )
          })}
        </ul>
      )}
      {contactsList.length === 0 && (
        <p className={classes["empty-list"]}>No favorite contacts found.</p>
      )}
    </Fragment>
  )
}

export default FavoritesList;