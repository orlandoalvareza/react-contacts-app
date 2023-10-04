import { Link } from 'react-router-dom';

import classes from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  const sortedContacts = contacts.sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));

  // const addFavoriteContactHandler = (id) => {
  //   console.log(id);
  // }

  return (
    <ul className={classes["contact-list"]}>
      {sortedContacts.map(contact => 
        <li key={contact.id}>
          <Link to={contact.id}>
            {contact.name}
          </Link>
          {/* <div 
            className={classes["favorite-contact-indicator"]} 
            onClick={() => addFavoriteContactHandler(contact.id)}
          ></div> */}
        </li>)}
    </ul>
  )
}

export default ContactsList;