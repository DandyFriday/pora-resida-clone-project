import React from 'react'
import "./buttonStyles.css"

const Button = ({style, btn_name, outline}) => {
  return (
    <button style={style} className={`${outline ? "outline" : "btn"}`}> {btn_name}</button>
  );
}

export default Button;