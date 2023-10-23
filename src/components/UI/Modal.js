import { Fragment, useEffect, useRef, useContext } from 'react';

import ThemeContext from '../../context/theme-context';
import classes from './Modal.module.css';

const Modal = (props) => {
  const modalRef = useRef(null);
  const firstFocusableElement = useRef(null);
  const lastFocusableElement = useRef(null);
  const { isLightTheme } = useContext(ThemeContext);

  const themeMode = isLightTheme ? 'light' : 'dark';

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll('a, button, input, select, textarea');
    
    if (focusableElements.length > 0) {
      firstFocusableElement.current = focusableElements[0];
      lastFocusableElement.current = focusableElements[focusableElements.length - 1];

      firstFocusableElement.current.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Tab' && focusableElements.length > 1) {
        if (event.shiftKey && document.activeElement === firstFocusableElement.current) {
          event.preventDefault();
          lastFocusableElement.current.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusableElement.current) {
          event.preventDefault();
          firstFocusableElement.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Fragment>
      <div className={classes[`backdrop__${themeMode}`]}></div>
      <div className={classes[`modal__${themeMode}`]} ref={modalRef}>
        {props.children}
      </div>
    </Fragment>
  )
}

export default Modal;