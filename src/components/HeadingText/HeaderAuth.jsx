import React from 'react';
// import style from '../../pages/Auth/auth.module.css';

const HeaderAuth = (props) => {
  return (
    <div className="text-center">
      <h2 style={{ color: '#efc81a' }}>{props.TitleAuth}</h2>
      <span style={{ color: '#8692a6' }} className="mb-3">
        {props.SpanAuth}
      </span>
      <hr className="mt-4" style={{ border: '1px solid #dddcdc' }} />
    </div>
  );
};

export default HeaderAuth;
