import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactsList from './ContactsList';
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classes from './ContactsBody.module.css';

const ContactsBody = ({ contacts }) => {
  const [contactsData, setContactsData] = useState(contacts);
  const [searchByName, setSearchByName] = useState('');
  
  const searchHandler = (event) => {
    const searchedName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(searchedName));

    if (filteredContacts.length === 0) {
      setSearchByName(searchedName);
      setContactsData(undefined);
    } else {
      setContactsData(filteredContacts);
    }
  }

  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contact-header"]}>
        <h2>Contacts</h2>
        <div className={classes["contact-header__actions"]}>
          <input onChange={searchHandler} type='search' id='search' placeholder='Search Contact'/>
          <Link to='/contacts/new'>New Contact</Link>
        </div>
      </div>
      <div className={classes["profile-contact"]}>
        <img src={image} alt='Profile'/>
        <div className={classes["profile-contact__info"]}>
          <h2>Sam Williams</h2>
          <h3>My Card</h3>
        </div>
      </div>
      {contactsData && <ContactsList contacts={contactsData}/>}
      {!contactsData && (
        <div className={classes['contact-no-found']}>
          <FontAwesomeIcon className={classes["search-icon"]} icon={faMagnifyingGlass}/>
          <h2>{`No results for "${searchByName}"`}</h2>
          <p>Please, try a new search</p>
        </div>
      )}
      <div className={classes['total-contacts']}>
        {`You have ${contacts.length} contacts`}
      </div>
    </div>
  )
}

export default ContactsBody;