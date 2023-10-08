import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer class={classes["footer-container"]}>
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h2>Social Media</h2>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>    
      <p className={classes["copyright"]}>
        &copy; <b>Orlando Alvarez</b> 2023. All rights reserved
      </p>
    </footer>
  )
}

export default Footer;