import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactsList from './ContactsList';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from './ContactsBody.module.css';
import UserContact from './UserContact';

const ContactsBody = ({ contacts }) => {
  const [contactsData, setContactsData] = useState(contacts);
  const [searchByName, setSearchByName] = useState('');
  
  const searchHandler = (event) => {
    const enteredName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(enteredName));

    if (filteredContacts.length === 0) {
      setSearchByName(enteredName);
      setContactsData(undefined);
    } else {
      setContactsData(filteredContacts);
    }
  }

  const contactNoFound = 
  <div className={classes['contact-no-found']}>
    <FontAwesomeIcon className={classes["search-icon"]} icon={faMagnifyingGlass}/>
    <h2>{`No results for "${searchByName}"`}</h2>
    <p>Please, try a new search</p>
  </div>;

  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contacts-header"]}>
        <h2>Contacts</h2>
        <div className={classes["contacts-header__actions"]}>
          <input onChange={searchHandler} type='search' id='search' placeholder='Search Contact'/>
          <Link to='/contacts/new'>New Contact</Link>
        </div>
      </div>
      <UserContact/>
      {contactsData && <ContactsList contacts={contactsData}/>}
      {!contactsData && contactNoFound}
      <div className={classes['total-contacts']}>
        {`You have ${contacts.length} contacts`}
      </div>
    </div>
  )
}

export default ContactsBody;