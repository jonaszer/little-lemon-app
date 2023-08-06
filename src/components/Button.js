import React from 'react';
import '../components/css/Button.css';

function Button(props) {
  return (
    <button>{props.name}</button>
  )
}

export default Button;