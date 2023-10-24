import { useContext, useState } from 'react';
import { Link, useLocation, useSubmit } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
import Modal from '../UI/Modal';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { 
  faArrowLeft, 
  faTrash, 
  faPenToSquare, 
  faPhone, 
  faMessage, 
  faVideo, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const { isLightTheme } = useContext(ThemeContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const submit = useSubmit();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get('from');

  const themeMode = isLightTheme ? 'light' : 'dark';

  const formattedDate = new Date(contact.birthday).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cancelDeleteHandler = () => {
    setIsDeleting(false);
  }

  const startDeleteHandler = () => {
    setIsDeleting(true);
  }

  const deleteHandler = () => {
    submit(null, { method: 'delete' });
  }

  const deleteModal = (
    <Modal>
      <div className={classes['delete-information']}>
        <h2>Are you sure?</h2>
        <p className={classes[`delete-info__${themeMode}`]}>
          Do you really want to delete this contact?
        </p>
        <p className={classes[`delete-info__${themeMode}`]}>
          This process cannot be undone.
        </p>
      </div>
      <div className={classes['delete-actions']}>
        <button onClick={cancelDeleteHandler}>
          Cancel
        </button>
        <button onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </Modal>
  )

  return (
    <div className={classes[`contact-container__${themeMode}`]}>
      <div className={classes["contact-actions"]}>
        <Link to={from === 'contacts' ? '/contacts' : '/favorites'}>
          <FontAwesomeIcon 
            className={classes["back-icon"]} 
            icon={faArrowLeft}
          />
        </Link>
        <div className={classes["contact-actions__manipulate"]}>
          <button 
            type='button' 
            onClick={startDeleteHandler}
            className={contact.id === '-Ngb9S-waKTzueJroyeR' && classes["disabled-delete-action"]}
            disabled={contact.id === '-Ngb9S-waKTzueJroyeR'}
          >
            <FontAwesomeIcon icon={faTrash}/>
          </button>
          <Link to='edit'>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </Link>
        </div>
      </div>
      <div className={classes["information-container"]}>
        <div className={classes["photo-container"]}>
          {!contact.photo && (
            <FontAwesomeIcon 
              icon={faCircleUser} 
              className={classes[`contact-icon__${themeMode}`]}
            />
          )}
          {contact.photo && (
            <img 
              className={classes["contact-image"]} 
              src={contact.photo} 
              alt='contact'
            />
          )}
        </div>
        <div className={classes[`basic-information__${themeMode}`]}>
          <h2>{contact.name}</h2>
          <span>{contact.company}</span>
        </div>
        <div className={classes["contact-links"]}>
          <a href={`tel:${contact.phone}`}>
            <FontAwesomeIcon icon={faPhone}/>
          </a>
          <a href={`whatsapp://send?phone=${contact.phone}`}>
            <FontAwesomeIcon icon={faMessage}/>
          </a>
          <a 
            href='https://web.skype.com/'
            target='_blank'
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faVideo}/>
          </a>
          <a 
            className={contact.email.length === 0 && classes['email-disabled']}
            href={contact.email.length === 0 ? '#' : `mailto:${contact.email}`}
          >
            <FontAwesomeIcon icon={faEnvelope}/> 
          </a>
        </div>
        <div className={classes[`contact-information__${themeMode}`]}>
          <div>
            <span>Phone number</span>
            <p>{contact.phone}</p>
          </div>
          <div>
            <span>{contact.email && 'Email'}</span>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className={classes["extra-information"]}>
          <div className={classes[`extra-info-section__${themeMode}`]}>
            <span>{contact.address && 'Address'}</span>
            <address>{contact.address}</address>
          </div>
          <div className={classes[`extra-info-section__${themeMode}`]}>
            <span>{contact.birthday && 'Birthday'}</span>
            <p>{contact.birthday && formattedDate}</p>
          </div>
        </div>
      </div>
      {isDeleting && deleteModal}
    </div>  
  )
}

export default ContactItem;