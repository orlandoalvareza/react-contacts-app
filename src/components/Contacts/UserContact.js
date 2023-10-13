
import image from '../../images/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg';
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