import { useState } from 'react';

import ContactsList from './ContactsList';
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './ContactsBody.module.css';
import NewContact from './NewContact';

const ContactsBody = ({ contacts }) => {
  const [search, setSearch] = useState(contacts);
  const [isAddNewContact, setIsAddNewContact] = useState(false);
  
  const searchHandler = (event) => {
    const searchedName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(searchedName));

    setSearch(filteredContacts);
  }

  const newContactHandler = () => {
    setIsAddNewContact(true);
  }

  const cancelNewContactHandler = () => {
    setIsAddNewContact(false);
  }

  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contacts-section"]}>
        <div className={classes["contact-header"]}>
          <h2>Contacts</h2>
          <div className={classes["contact-header__actions"]}>
            <input onChange={searchHandler} type='search' id='search' placeholder='Search Contact'/>
            <button onClick={newContactHandler} type='button'>New Contact</button>
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
        {isAddNewContact && <NewContact onCancel={cancelNewContactHandler}/>}
      </div>
    </div>
  )
}

export default ContactsBody;