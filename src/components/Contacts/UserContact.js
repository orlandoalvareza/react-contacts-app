
import image from '../../images/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import classes from './UserContact.module.css';

const UserContact = () => {
  return (
    <div className={classes["profile-contact"]}>
      <img src={image} alt='Profile'/>
      <div className={classes["profile-contact__info"]}>
        <h2>Sam Williams</h2>
        <h3>My Card</h3>
      </div>
    </div>
  )
}

export default UserContact;