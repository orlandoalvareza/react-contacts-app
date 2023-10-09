import Hero from './Hero';
import Description from './Description';
import Footer from './Footer';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={classes["home-content"]}>
      <Hero />
      <Description />
      <Footer />
    </div>
  )
}

export default Welcome;