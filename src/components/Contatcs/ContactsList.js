import { Link } from 'react-router-dom';

import classes from './ContactsList.module.css';

const DUMMY_CONTACTS = [
  {
    id: 'c1',
    name: 'Alice'
  },
  {
    id: 'c2',
    name: 'Fred'
  }
]

const ContactsList = () => {
  return (
    <ul className={classes["contact-list"]}>
      {DUMMY_CONTACTS.map(contact => 
        <li key={contact.id}>
          <Link to={contact.id}>
            {contact.name}
          </Link>
        </li>)}
    </ul>
  )
}

export default ContactsList;