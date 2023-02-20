import React from 'react';
import style from './heading.module.css';

const HeadingPagination = ({ children }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h5 className={style.headingText}>{children}</h5>
      </div>
    </div>
  );
};

export default HeadingPagination;
