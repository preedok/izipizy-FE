import React from 'react';
import style from './heading.module.css';

const HeadingText = ({ children }) => {
  return (
    <div className="row mb-5">
      <h3 className={style.headingText}>{children}</h3>
    </div>
  );
};

export default HeadingText;
