import classes from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form>
      <div className={classes["basic-information"]}>
        <input type='text' id="firstname" name="firstname" placeholder="First name" required/>
        <input type="text" id="lastname" name="lastname" placeholder="Last name" />
        <input type="text" id="company" name="company" placeholder="Company" />
      </div>
      <div className={classes["contact-information"]}>
        <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <div className={classes["extra-information"]}>
        <input type="text" id="address" name="address" placeholder="Address" />
        <input type="date" id="date" name='date' placeholder='Birthday' />
      </div>
      <div className={classes.actions}>
        <button type='button'>Cancel</button>
        <button type='submit'>Done</button>
      </div>
    </form>
  )
}

export default ContactForm;