import { useContext } from 'react';

import ThemeContext from '../../context/theme-context';
import classes from './CodeIndicator.module.css';

const CodeIndicator = ({ indicator, numberIndicator }) => {
  const { isLightTheme } = useContext(ThemeContext);
  
  const themeMode = isLightTheme ? 'light' : 'dark';

  let IndicatorClass;

  if (indicator >= numberIndicator) {
    IndicatorClass = classes[`code-indicator-active__${themeMode}`];
  } else {
    IndicatorClass = classes["code-indicator"]
  }

  return (
    <div className={IndicatorClass}></div>
  )
}

export default CodeIndicator;