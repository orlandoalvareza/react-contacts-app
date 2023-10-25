import classes from './CodeIndicator.module.css';

const CodeIndicator = ({ indicator, numberIndicator }) => {
  // console.log(indicator);
  return (
    <div 
      className={
        indicator >= numberIndicator 
        ? classes["code-indicator-active"] 
        : classes["code-indicator"]
      }
    ></div>
  )
}

export default CodeIndicator;