import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import classes from './ContactForm.module.css';

const ContactForm = ({method, contact}) => {
  const [addPhoto, setAddPhoto] = useState(false);
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('../');
  }

  const addPhotoHandler = () => {
    setAddPhoto((addPhoto) => !addPhoto)
  }

  return (
    <Form method={method} className={classes["form"]}>
      <div className={classes["contact-photo-container"]}>
        {!addPhoto && <FontAwesomeIcon icon={faCircleUser} className={classes["contact-icon"]}/>}
        {addPhoto && <input type='text' name="photo" placeholder='add photo url'/>}
        <button onClick={addPhotoHandler}>Add Photo</button>
      </div>
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