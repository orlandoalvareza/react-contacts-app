import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes["home-content"]}>
      <div className={classes["hero-container"]}>
        <div className={classes["hero-content"]}>
          <h1>Welcome to TouchBase</h1>
          <h3>Where Contacts Become Connections</h3>
          <button>Get Started</button>
        </div>
      </div>
      <div className={classes["description-container"]}>
        <div className={classes["introduction-container"]}>
          <h2>Why Choose TouchBase?</h2>
          <p>
            TouchBase is the perfect tool to help you organize
            and manage your contacts effortlessly. Whether you're
            a busy professional, a social butterfly, or just want
            to keep your contacts in order, our app has you covered.
          </p>
        </div>
        <div className={classes["key-features"]}>
          <h2>Key Features:</h2>
          <ul>
            <li>Effortlessly store and manage your contacts.</li>
            <li>Mark your favorite contacts with ease.</li>
            <li>Access contacts from anywhere, anytime, whether on a smartphone, tablet, or computer.</li>
          </ul>
        </div>
        <div className={classes["testimonials-features"]}>
          <ul>
            <li>
              <h5>New York, NY</h5>
              "I used to dread managing my contacts, but with TouchBase,
              it's a breeze! It's made my professional life so much easier."
              <span>Sarah M.</span>
            </li>
            <li>
              <h5>Madrid, Spain</h5>
              "¡Increíble! TouchBase ha simplificado la gestión
               de mis contactos."
              <span>Maria S.</span>
            </li>
            <li>
              <h5>Tokyo, Japan</h5>
              "日本語でも使いやすいアプリです。TouchBaseを使って、連絡先を整理しやすくなりました。"
              <span>Kenji Y.</span>
            </li>
            <li>
              <h5>Sydney, Australia</h5>
              "I'm loving TouchBase! It keeps my contacts organized
               whether I'm at the beach or in the office. Highly recommended."
              <span>Isabella L.</span>
            </li>
            <li>
              <h5>Rome, Italy</h5>
              "Con TouchBase, la gestione dei miei
              contatti è diventata un gioco da ragazzi! È davvero un'app versatile."
              <span>Luca M.</span>
            </li>
          </ul>
        </div>
      </div>
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
    </div>
  )
}

export default Welcome;