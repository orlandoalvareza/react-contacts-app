import { useState } from 'react';

import classes from './ContactForm.module.css';

const initialInput = {
  'first-name': '',
  'last-name': '',
  company: '',
  phone: '',
  email: '',
  address: '',
  date: '',
};

const ContactForm = (props) => {
  const [contactInput, setContactInput] = useState(initialInput)

  const inputChangeHandler = (input, value) => {
    setContactInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveContact(contactInput);
  }

  return (
    <form onSubmit={submitHandler} className={classes["form"]}>
      <div className={classes["basic-information"]}>
        <input 
          onChange={(event) => inputChangeHandler('first-name', event.target.value)} 
          value={contactInput['first-name']}
          type='text' 
          id="first-name" 
          name="first-name" 
          placeholder="First name" 
          required
        />
        <input 
          onChange={(event) => inputChangeHandler('last-name', event.target.value)} 
          value={contactInput['last-name']}
          type="text"  
          id="last-name" 
          name="last-name" 
          placeholder="Last name" 
        />
        <input 
          onChange={(event) => inputChangeHandler('company', event.target.value)} 
          value={contactInput['company']}
          type="text" 
          id="company" 
          name="company" 
          placeholder="Company" 
        />
      </div>
      <div className={classes["contact-information"]}>
        <input 
          onChange={(event) => inputChangeHandler('phone', event.target.value)} 
          value={contactInput['phone']}
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Phone number" 
          required 
        />
        <input 
          onChange={(event) => inputChangeHandler('email', event.target.value)} 
          value={contactInput['email']}
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
        />
      </div>
      <div className={classes["extra-information"]}>
        <input 
          onChange={(event) => inputChangeHandler('address', event.target.value)} 
          value={contactInput['address']}
          type="text" 
          id="address" 
          name="address" 
          placeholder="Address" 
        />
        <input 
          onChange={(event) => inputChangeHandler('date', event.target.value)} 
          value={contactInput['date']}
          type="date" 
          id="date" 
          name='date' 
          placeholder='Birthday' 
        />
      </div>
      <div className={classes.actions}>
        <button type='button'>Cancel</button>
        <button type='submit'>Done</button>
      </div>
    </form>
  )
}

export default ContactForm;