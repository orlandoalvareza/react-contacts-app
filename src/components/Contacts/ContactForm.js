import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import classes from './ContactForm.module.css';

const ContactForm = ({method, contact}) => {
  const [isAddingContactPhoto, setIsAddingContactPhoto] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('../');
  }

  const addPhotoHandler = () => {
    setIsAddingContactPhoto((isAddingContactPhoto) => !isAddingContactPhoto)
  }

  const enteredNameHandler = (event) => {
    const enteredName = event.target.value;

    if (enteredName.trim() !== '') {
      setNameIsValid(true)
    } else {
      setNameIsValid(false)
    }
  }

  const enteredPhoneHandler = (event) => {
    const enteredPhone = event.target.value;
    const phoneNumberRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\s?\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;

    if (phoneNumberRegex.test(enteredPhone.trim())) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  }

  const canSubmit = nameIsValid && phoneIsValid;

  return (
    <Form method={method} className={classes["form"]}>
      <div 
        className={
          isAddingContactPhoto 
            ? classes["contact-photo-container"] 
            : classes["contact-icon-container"]
        }
      >
        <FontAwesomeIcon 
          onClick={addPhotoHandler} 
          icon={faCircleUser} 
          className={classes["contact-icon"]}
        />
        {isAddingContactPhoto && (
          <div className={classes["contact-photo-container__input"]}>
            <label htmlFor='photo'>Photo URL</label>
            <input type='text' id='photo' name="photo"/>
          </div>
        )}
      </div>
      <div className={classes["information-container"]}>
        <div className={classes["basic-information"]}>
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id="name" 
            name="name"
            onChange={enteredNameHandler}
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
            onChange={enteredPhoneHandler}
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
        <button type='submit' disabled={!canSubmit}>Save</button>
      </div>
    </Form>
  )
}

export default ContactForm;