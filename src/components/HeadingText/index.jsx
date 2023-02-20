import React from 'react';
import { Link } from 'react-router-dom';
import style from './heading.module.css';

const HeadingText = ({ children, link }) => {
  return (
    <div className="row mb-5">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className={style.headingText}>{children}</h3>
        <Link to={link} className={style.viewMore}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default HeadingText;
