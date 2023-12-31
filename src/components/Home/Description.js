import { useContext } from 'react';

import ThemeContext from '../../context/theme-context';
import classes from './Description.module.css';

const Description = () => {
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <div className={classes[`description-container__${themeMode}`]}>
      <div className={classes[`introduction-container__${themeMode}`]}>
        <h2>Why choose TouchBase?</h2>
        <p>
          TouchBase is the perfect tool to help you organize
          and manage your contacts effortlessly. Whether you're
          a busy professional, a social butterfly, or just want
          to keep your contacts in order, our app has you covered.
        </p>
      </div>
      <div>
        <h2>Benefits</h2>
        <div className={classes[`benefits-container__${themeMode}`]}>
          <div className={classes[`benefits-section__${themeMode}`]}>
            <h3>Contact Management</h3>
            <p>
              Say goodbye to the chaos of disorganized contacts.
              TouchBase simplifies contact management, making it
              easy to find, edit, and stay connected with your contacts.
            </p>
          </div>
          <div className={classes[`benefits-section__${themeMode}`]}>
            <h3>Instant Favorites Access</h3>
            <p>
              With TouchBase, you can mark your favorite contacts with a
              single click. Access your most important connections instantly,
              saving you time and hassle.
            </p>
          </div>
          <div className={classes[`benefits-section__${themeMode}`]}>
            <h3>Accessibility</h3>
            <p>
              Access your contacts from anywhere, anytime, whether you're on
              your smartphone, tablet, or computer, your contacts are always
              up to date.
            </p>
          </div>
          <div className={classes[`benefits-section__${themeMode}`]}>
            <h3>Secure and Private</h3>
            <p>
              Rest easy knowing your contact data is safe and private with
              TouchBase. We prioritize your security, ensuring that your
              information is for your eyes only.
            </p>
          </div>
        </div>  
      </div>
      <div className={classes["testimonials"]}>
        <h2>Testimonials</h2>
        <div>
          <ul className={classes[`testimonials-container__${themeMode}`]}>
            <li>
              <h4>New York, NY</h4>
              "I used to dread managing my contacts, but with TouchBase,
              it's a breeze! It's made my professional life so much easier."
              <span>Sarah M.</span>
            </li>
            <li>
              <h4>Madrid, Spain</h4>
              "¡Increíble! TouchBase ha simplificado la gestión
                de mis contactos."
              <span>Maria S.</span>
            </li>
            <li>
              <h4>Tokyo, Japan</h4>
              "日本語でも使いやすいアプリです。TouchBaseを使って、連絡先を整理しやすくなりました。"
              <span>Kenji Y.</span>
            </li>
            <li>
              <h4>Sydney, Australia</h4>
              "I'm loving TouchBase! It keeps my contacts organized
                whether I'm at the beach or in the office. Highly recommended."
              <span>Isabella L.</span>
            </li>
            <li>
              <h4>Rome, Italy</h4>
              "Con TouchBase, la gestione dei miei
              contatti è diventata un gioco da ragazzi! È davvero un'app versatile."
              <span>Luca M.</span>
            </li>
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default Description;