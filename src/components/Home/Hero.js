import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-content"]}>
        <h1>Welcome to TouchBase</h1>
        <h3>Where Contacts Become Connections</h3>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Hero;