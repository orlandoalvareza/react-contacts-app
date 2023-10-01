import { useState } from 'react';

import ContactsList from './ContactsList';
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './ContactsBody.module.css';
import NewContact from './NewContact';

const ContactsBody = ({ contacts }) => {
  const [contactsData, setContactsData] = useState(contacts);
  const [isAddingContact, setIsAddingContact] = useState(false);
  
  const searchHandler = (event) => {
    const searchedName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(searchedName));

    setContactsData(filteredContacts);
  }

  const newContactHandler = () => {
    setIsAddingContact(true);
  }

  const stopNewContactHandler = () => {
    setIsAddingContact(false);
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
        <ContactsList contacts={contactsData}/>
        {isAddingContact && <NewContact onStopEditing={stopNewContactHandler} />}
      </div>
    </div>
  )
}

export default ContactsBody;