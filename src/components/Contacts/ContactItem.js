import { useNavigate } from 'react-router-dom';

import { deleteContact } from '../../util/http';
import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const navigate = useNavigate();

  const startDeleteHandler = () => {
    deleteContact(contact.id);
    navigate('..')
  }

  return (
    <div className={classes['contact-container']}>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <div className={classes["actions"]}>
        <button type='button' onClick={startDeleteHandler}>Delete</button>
        <button type='button'>Edit</button>
      </div>
    </div>  
  )
}

export default ContactItem;