import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ContactsList from './ContactsList';
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './ContactsBody.module.css';
import { fetchTotalContacts } from '../../util/http';

const ContactsBody = ({ contacts }) => {
  const [contactsData, setContactsData] = useState(contacts);
  const [totalContacts, setTotalContacts] = useState(0);
  
  const searchHandler = (event) => {
    const searchedName = event.target.value;
    const filteredContacts = contacts.filter(contacts => contacts.name.includes(searchedName));

    setContactsData(filteredContacts);
  }

  useEffect(() => {
    async function getTotalContacts() {
      try {
        const total = await fetchTotalContacts();
        setTotalContacts(total);
      } catch (error) {
        console.log(error);
      }
    }

    getTotalContacts()
  }, []);

  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contacts-section"]}>
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
        <ContactsList contacts={contactsData}/>
        <div className={classes['total-contacts']}>{`You have ${totalContacts} contacts`}</div>
      </div>
    </div>
  )
}

export default ContactsBody;