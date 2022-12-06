import React from "react";
import styles from '../styles/modules/button.module.scss';
import {getClasses} from '../utils/getClasses'

const buttonType = {
  primary: 'primary',
  secondary: 'secondary'
}

function Button({type, variant = 'primary', children, ...rest}){
  return(
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([
        styles.button,
        styles[`button--${buttonType[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  )
}
function SelectButton({ children, id, ...rest}){
  return(
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  )
}
export { SelectButton };
export default Button;