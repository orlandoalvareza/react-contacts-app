import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ThemeContext from '../../context/theme-context';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <footer className={classes[`footer__${themeMode}`]}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-section"]}>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FontAwesomeIcon className={classes["contact-icon"]} icon={faPhone}/>
              <a href='tel:+1 (786) 580-1439'>+1 (786) 580 1439</a>
            </li>
            <li>
              <FontAwesomeIcon className={classes["contact-icon"]} icon={faEnvelope}/>
              <a href='mailto:oalvarezalarcon0304@gmail.com'>Send me an email</a>
            </li>
          </ul>
        </div>
        <div className={classes["footer-section"]}>
          <h2>Social</h2>
          <ul className={classes["social-container-list"]}>
            <li>
              <a 
                href='https://www.linkedin.com/in/orlando-alvarez-5a705727a/' 
                target='_blank' 
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon className={classes["social-icon"]} icon={faLinkedinIn}/>
              </a>
            </li>
            <li>
              <a 
                href='https://github.com/orlandoalvareza'
                target='_blank'
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon className={classes["social-icon"]} icon={faGithub}/>
              </a>
            </li>
          </ul>
        </div>   
      </div>   
      <p className={classes["copyright"]}>
        &copy; <b>Orlando Alvarez</b> 2023. All rights reserved
      </p>
    </footer>
  )
}

export default Footer;