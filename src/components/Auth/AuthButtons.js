import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDeleteLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import classes from './AuthButtons.module.css';

const AuthButtons = ({ onEnteredCode, onClear, onDelete }) => {
  return (
    <div className={classes["buttons-container"]}>
      <div className={classes["buttons-row"]}>
        <button onClick={onEnteredCode} value='1'>1</button>
        <button onClick={onEnteredCode} value='2'>2</button>
        <button onClick={onEnteredCode} value='3'>3</button>
      </div>
      <div className={classes["buttons-row"]}>
        <button onClick={onEnteredCode} value='4'>4</button>
        <button onClick={onEnteredCode} value='5'>5</button>
        <button onClick={onEnteredCode} value='6'>6</button>
      </div>
      <div className={classes["buttons-row"]}>
        <button onClick={onEnteredCode} value='7'>7</button>
        <button onClick={onEnteredCode} value='8'>8</button>
        <button onClick={onEnteredCode} value='9'>9</button>
      </div>
      <div className={classes["buttons-row"]}>
        <button onClick={onClear}>
          <FontAwesomeIcon icon={faArrowRotateRight}/>
        </button>
        <button onClick={onEnteredCode} value='0'>0</button>
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faDeleteLeft}/>
        </button>
      </div>
    </div>
  )
}

export default AuthButtons;