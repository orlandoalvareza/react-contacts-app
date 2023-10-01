import { useSubmit } from 'react-router-dom';

import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    submit(null, { method: 'delete' });
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