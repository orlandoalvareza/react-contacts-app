import Hero from './Hero';
import Description from './Description';
import classes from './Welcome.module.css';
import Footer from './Footer';

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