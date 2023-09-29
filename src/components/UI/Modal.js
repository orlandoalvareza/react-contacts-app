import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const BackDrop = () => {
  return <div className={classes.backdrop}></div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop/>, portalElement)}
      {ReactDOM.createPortal(<div className={classes.modal}>{props.children}</div>, portalElement)}
    </Fragment>
  )
}

export default Modal;