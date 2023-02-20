import React from 'react';
import style from './comment.module.css';

const CommentList = ({ dataComment }) => {
  return (
    <ul className={style.listsComments}>
      {dataComment.map((item) => (
        <li className={style.listComments}>
          <div className={style.wrapperComments}>
            <img src={item.image_profile} alt="profile" className={`me-3 ${style.imgComment}`} />
            <div className={style.wrapper}>
              <p className={style.titleName}>{item.name}</p>
              <span className={style.comments}>{item.comment_text}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
