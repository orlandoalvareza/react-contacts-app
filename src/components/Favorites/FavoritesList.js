import { useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <ul className={classes["favorites-list"]}>
      {contactsList.map(contact => 
        <li key={contact.id}>
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
          <div onClick={() => addFavoriteContactHandler(contact.id)}>
            {isEditing && (
              <FontAwesomeIcon 
                className={classes["x-mark-icon"]} 
                icon={faCircleXmark}
              />
            )}
          </div>
        </li>)}
    </ul>
  )
}

export default FavoritesList;