import { Link } from 'react-router-dom';

import classes from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  return (
    <ul className={classes["contact-list"]}>
      {contacts.map(contact => 
        <li key={contact.id}>
          <Link to={contact.id}>
            {contact.name}
          </Link>
        </li>)}
    </ul>
  )
}

export default ContactsList;