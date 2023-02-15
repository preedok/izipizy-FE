import React from 'react';
import style from './comment.module.css';

const CommentList = ({ name, comment, profile }) => {
  return (
    <ul className={style.listsComments}>
      <li className={style.listComments}>
        <div className={style.wrapperComments}>
          <img src={profile} alt="profile" className="me-3" />
          <div className={style.wrapper}>
            <p className={style.titleName}>{name}</p>
            <span className={style.comments}>{comment}</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
