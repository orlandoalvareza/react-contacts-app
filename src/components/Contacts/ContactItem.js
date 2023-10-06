import { useState } from 'react';
import { Link, useSubmit } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [isDeleting, setIsDeleting] = useState(false);
  const submit = useSubmit();

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
        <p>This action is irreversible</p>
      </div>
      <div className={classes['delete-actions']}>
        <button onClick={cancelDeleteHandler}>Cancel</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Modal>
  )

  return (
    <div className={classes['contact-container']}>
      <div className={classes["contact-actions"]}>
        <Link to='..'>
          <FontAwesomeIcon className={classes["back-icon"]} icon={faArrowLeft}/>
        </Link>
        <div className={classes["contact-actions__manipulate"]}>
          <button type='button' onClick={startDeleteHandler}>
            <FontAwesomeIcon icon={faTrash}/>
          </button>
          <Link to='edit'>
            <FontAwesomeIcon icon={faPenToSquare}/>
          </Link>
        </div>
      </div>
      <div className={classes["information-container"]}>
        <FontAwesomeIcon icon={faCircleUser} className={classes["contact-icon"]}/>
        <div className={classes["basic-information"]}>
          <h2>{contact.name}</h2>
          <span>{contact.company}</span>
        </div>
        <div className={classes["contact-links"]}>
          <Link>
            <FontAwesomeIcon icon={faPhone}/>
          </Link>
          <Link>
            <FontAwesomeIcon icon={faMessage}/>
          </Link>
          <Link>
            <FontAwesomeIcon icon={faVideo}/>
          </Link>
          <Link>
            <FontAwesomeIcon icon={faEnvelope}/> 
          </Link>
        </div>
        <div className={classes["contact-information"]}>
          <div className={classes["contact-info-section"]}>
            <span>Phone number</span>
            <p>{contact.phone}</p>
          </div>
          <div className={classes["contact-info-section"]}>
            <span>{contact.email && 'Email'}</span>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className={classes["extra-information"]}>
          <div className={classes["extra-info-section"]}>
            <span>{contact.address && 'Address'}</span>
            <address>{contact.address}</address>
          </div>
          <div className={classes["extra-info-section"]}>
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