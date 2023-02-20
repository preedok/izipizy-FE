import React from 'react';
import style from '../../pages/Auth/auth.module.css';

const ButtonAuth = (props) => {
  return (
    <a href="../../index.html">
      <button className={`${style.btnWarning} btn btn-warning mb-2`}>{props.Button}</button>
    </a>
  );
};

export default ButtonAuth;
