import React from 'react'
import "./buttonStyles.css"

const Button = ({style, btn_name, outline, rightIcon, leftIcon}) => {
  return (
    <button style={style} className={`${outline ? "outline" : "btn"}`}> 
    { leftIcon && <span>{leftIcon}</span>}
    {btn_name}    
    {rightIcon && <span>{rightIcon}</span> }  
    </button>
  );
}

export default Button;