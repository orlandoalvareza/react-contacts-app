import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './ContactsBody.module.css';

const ContactsBody = () => {
  return (
    <div className={classes["contacts-container"]}>
      <div className={classes["contacts-section"]}>
        <div className={classes["contact-header"]}>
          <h2>Contacts</h2>
          <div className={classes["contact-header__actions"]}>
            <input type='search' id='search'/>
            <button type='button'>New Contact</button>
          </div>
        </div>
        <div className={classes["profile-contact"]}>
          <img src={image} alt='Profile'/>
          <div className={classes["profile-contact__info"]}>
            <h2>Sam Williams</h2>
            <h3>My Card</h3>
          </div>
        </div>
        <ul className={classes["contact-list"]}>
          <li>Anna</li>
          <li>Beatriz</li>
          <li>Fred</li>
          <li>Michael</li>
          <li>Leah</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactsBody;