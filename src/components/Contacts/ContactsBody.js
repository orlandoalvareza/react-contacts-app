import { useState } from 'react';

import ContactsList from './ContactsList';
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './ContactsBody.module.css';

const ContactsBody = ({ contacts }) => {
  const [search, setSearch] = useState(contacts);
  
  const searchHandler = (event) => {
    const searchedName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(searchedName));

    setSearch(filteredContacts);
  }

  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contacts-section"]}>
        <div className={classes["contact-header"]}>
          <h2>Contacts</h2>
          <div className={classes["contact-header__actions"]}>
            <input type='search' id='search' onChange={searchHandler} placeholder='search contact'/>
            <button type='button'>New Contact</button>
          </div>
        </div>
        <div className={classes["profile-contact"]}>
          <img src={image} alt='Profile'/>
          <div className={classes["profile-contact__info"]}>
            <h2>Sam Williams</h2>
            <h3>My Card</h3>
          </div>
        </div>
        <ContactsList contacts={search}/>
      </div>
    </div>
  )
}

export default ContactsBody;