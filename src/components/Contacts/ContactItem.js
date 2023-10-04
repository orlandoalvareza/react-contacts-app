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
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <div className={classes["actions"]}>
        <button type='button' onClick={startDeleteHandler}>Delete</button>
        <Link to='edit'>Edit</Link>
      </div>
      {isDeleting && deleteModal}
    </div>  
  )
}

export default ContactItem;