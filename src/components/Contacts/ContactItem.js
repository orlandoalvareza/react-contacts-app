import classes from './ContactItem.module.css';

const ContactItem = () => {
  return (
    <div className={classes['contact-container']}>
      <h2>Name</h2>
      <p>Phone Number</p>
    </div>  
  )
}

export default ContactItem;