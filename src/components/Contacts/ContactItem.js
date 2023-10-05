import { useState } from 'react';
import { Link, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal';
import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const submit = useSubmit();

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
      <div className={classes["information-container"]}>
        <div className={classes["basic-information"]}>
          <h2>{contact.name}</h2>
          <span>{contact.company}</span>
        </div>
        <div className={classes["contact-links"]}>
          <Link>Call</Link>
          <Link>Message</Link>
          <Link>Video</Link>
          <Link>Email</Link>
        </div>
        <div className={classes["contact-information"]}>
          <div className={classes["contact-info-section"]}>
            <span>Phone number</span>
            <p>{contact.phone}</p>
          </div>
          <div className={classes["contact-info-section"]}>
            <span>Email</span>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className={classes["extra-information"]}>
          <div className={classes["extra-info-section"]}>
            <span>Address</span>
            <address>{contact.address}</address>
          </div>
          <div className={classes["extra-info-section"]}>
            <span>Birthday</span>
            <p>{contact.birthday}</p>
          </div>
        </div>
      </div>
      <div className={classes["contact-actions"]}>
        <button type='button' onClick={startDeleteHandler}>Delete</button>
        <Link to='edit'>Edit</Link>
      </div>
      {isDeleting && deleteModal}
    </div>  
  )
}

export default ContactItem;