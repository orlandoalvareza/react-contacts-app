import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  return (
    <div className={classes['contact-container']}>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
    </div>  
  )
}

export default ContactItem;