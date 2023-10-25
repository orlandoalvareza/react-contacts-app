import classes from './CodeIndicator.module.css';

const CodeIndicator = ({ indicator, numberIndicator }) => {
  let IndicatorClass;

  if (indicator >= numberIndicator) {
    IndicatorClass = classes["code-indicator-active"];
  } else {
    IndicatorClass = classes["code-indicator"]
  }

  return (
    <div className={IndicatorClass}></div>
  )
}

export default CodeIndicator;