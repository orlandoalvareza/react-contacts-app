import { useState } from 'react';
import classes from './CodeIndicator.module.css';

const CodeIndicator = ({ indicator, numberIndicator, isValid }) => {
  let IndicatorClass;

  if (indicator >= numberIndicator) {
    IndicatorClass = classes["code-indicator-active"];
  } else {
    IndicatorClass = classes["code-indicator"]
  }

  if (!isValid) {
    IndicatorClass = classes["invalid-code"];
  }  

  return (
    <div className={IndicatorClass}></div>
  )
}

export default CodeIndicator;