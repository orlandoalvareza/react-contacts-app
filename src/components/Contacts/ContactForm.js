import { Form, useNavigate } from 'react-router-dom';

import classes from './ContactForm.module.css';

const ContactForm = ({method, contact}) => {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('../');
  }

  return (
    <Form method={method} className={classes["form"]}>
      <div className={classes["basic-information"]}>
        <input 
          type='text' 
          id="name" 
          name="name" 
          placeholder="Name" 
          defaultValue={contact ? contact.name : ''}
          autoFocus
          required
        />
        <input 
          type="text" 
          id="company" 
          name="company" 
          defaultValue={contact ? contact.company : ''}
          placeholder="Company" 
        />
      </div>
      <div className={classes["contact-information"]}>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          defaultValue={contact ? contact.phone : ''}
          placeholder="Phone number" 
          required 
        />
        <input
          type="email" 
          id="email" 
          name="email" 
          defaultValue={contact ? contact.email : ''}
          placeholder="Email" 
        />
      </div>
      <div className={classes["extra-information"]}>
        <input
          type="text" 
          id="address" 
          name="address" 
          defaultValue={contact ? contact.address : ''}
          placeholder="Address" 
        />
        <input
          type="date" 
          id="date" 
          name='date' 
          defaultValue={contact ? contact.date : ''}
          placeholder='Birthday' 
        />
      </div>
      <div className={classes.actions}>
        <button onClick={cancelHandler} type='button'>Cancel</button>
        <button type='submit'>Done</button>
      </div>
    </Form>
  )
}

export default ContactForm;