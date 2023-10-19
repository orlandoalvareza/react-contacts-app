import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';

import ThemeContext from '../../context/theme-context';
import classes from './Modal.module.css';

const BackDrop = () => {
  return <div className={classes.backdrop}></div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop/>, portalElement)}
      {ReactDOM.createPortal(
        <div className={classes[`modal__${themeMode}`]}>
          {props.children}
        </div>, 
        portalElement
      )}
    </Fragment>
  )
}

export default Modal;