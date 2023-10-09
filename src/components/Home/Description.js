import classes from './Description.module.css';

const Description = () => {
  return (
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
      <div className={classes["benefits"]}>
        <h2>Benefits</h2>
        <div className={classes["benefits-container"]}>
          <div className={classes["benefits-section"]}>
            <h3>Simplified Contact Management</h3>
            <p>
              Say goodbye to the chaos of disorganized contacts.
              TouchBase simplifies contact management, making it
              easy to find, edit, and stay connected with your contacts.
            </p>
          </div>
          <div className={classes["benefits-section"]}>
            <h3>Instant Favorites Access</h3>
            <p>
              With TouchBase, you can mark your favorite contacts with a
              single click. Access your most important connections instantly,
              saving you time and hassle.
            </p>
          </div>
          <div className={classes["benefits-section"]}>
            <h3>Accessibility</h3>
            <p>
              Access your contacts from anywhere, anytime, whether you're on
              your smartphone, tablet, or computer, your contacts are always
              up to date.
            </p>
          </div>
          <div className={classes["benefits-section"]}>
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
        <div className={classes["testimonials-container"]}>
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
    </div>
  )
}

export default Description;