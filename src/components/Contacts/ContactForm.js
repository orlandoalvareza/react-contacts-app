import { Form, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import classes from './ContactForm.module.css';

const ContactForm = ({method, contact}) => {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('../');
  }

  return (
    <Form method={method} className={classes["form"]}>
      <FontAwesomeIcon icon={faCircleUser} className={classes["contact-icon"]}/>
      <div className={classes["information-container"]}>
        <div className={classes["basic-information"]}>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id="name" 
            name="name"
            defaultValue={contact ? contact.name : ''}
            autoFocus
            required
          />
          <label htmlFor='company'>Company</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            defaultValue={contact ? contact.company : ''}
          />
        </div>
        <div className={classes["contact-information"]}>
          <label htmlFor='phone'>Phone number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            defaultValue={contact ? contact.phone : ''}
            required 
          />
          <label htmlFor='email'>Email</label>
          <input
            type="email" 
            id="email" 
            name="email" 
            defaultValue={contact ? contact.email : ''}
          />
        </div>
        <div className={classes["extra-information"]}>
          <div className={classes["extra-information-content"]}>
            <label htmlFor='address'>Address</label>
            <input
              type="text" 
              id="address" 
              name="address" 
              defaultValue={contact ? contact.address : ''}
            />
          </div>
          <div className={classes["extra-information-content"]}>
            <label htmlFor='date'>Birthday</label>
            <input
              type="date" 
              id="date" 
              name='date' 
              defaultValue={contact ? contact.date : ''}
              placeholder='Birthday' 
            />
          </div>
        </div>
        <div className={classes["favorite-marked"]}>
          <input 
            type="checkbox"
            id='favorite'
            name='favorite'
          />
          <label htmlFor='favorite'>Add to favorites</label>
        </div>
      </div>  
      <div className={classes.actions}>
        <button onClick={cancelHandler} type='button'>Cancel</button>
        <button type='submit'>Save</button>
      </div>
    </Form>
  )
}

export default ContactForm;