import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserContact from './UserContact';
import ContactsList from './ContactsList';
import ThemeContext from '../../context/theme-context';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './Contacts.module.css';

const Contacts = ({ contacts }) => {
  const [contactsData, setContactsData] = useState(contacts);
  const [searchByName, setSearchByName] = useState('');
  const { isLightTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const themeMode = isLightTheme ? 'light' : 'dark';
  
  const searchHandler = (event) => {
    const enteredName = event.target.value.toLowerCase();
    const filteredContacts = contacts.filter(contacts => contacts.name.toLowerCase().includes(enteredName));

    if (filteredContacts.length === 0) {
      setSearchByName(enteredName);
      setContactsData(undefined);
    } else {
      setContactsData(filteredContacts);
    }
  }

  const contactNoFound = 
    <div className={classes[`contact-no-found__${themeMode}`]}>
      <FontAwesomeIcon 
        className={classes[`search-icon__${themeMode}`]}
        icon={faMagnifyingGlass}
      />
      <h2>{`No results for "${searchByName}"`}</h2>
      <p>Please, try a new search</p>
    </div>;

  return (
    <motion.div 
      className={classes[`contacts-container__${themeMode}`]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes[`contacts-header__${themeMode}`]}>
        <h2>Contacts</h2>
        <div className={classes[`contacts-header__actions__${themeMode}`]}>
          <input 
            onChange={searchHandler} 
            type='search' 
            id='search' 
            placeholder='Search Contact'
          />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 600 }} 
          >
            <Link to='/contacts/new'>
              {isMobile ? <FontAwesomeIcon icon={faPlus}/> : 'New Contact'}
            </Link>
          </motion.div>
        </div>
      </div>
      <UserContact/>
      {contactsData && <ContactsList contacts={contactsData}/>}
      {!contactsData && contactNoFound}
    </motion.div>
  )
}

export default Contacts;