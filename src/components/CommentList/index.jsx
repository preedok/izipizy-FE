import React from "react";
import style from "./comment.module.css";
import axios from "axios";
import Swal from "sweetalert2";

const CommentList = ({ dataComment }) => {
  const token = localStorage.getItem("token");
  const idUser = localStorage.getItem("id");
  const idSplit = idUser.split('"')[1];

  const handleEdit = () => {};
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${process.env.REACT_APP_BACKEND}/api/v1/comment/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            Swal.fire(
              `${response.data.message}`,
              "Your comment has been deleted.",
              "success"
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <>
      <ul className={style.listsComments}>
        {dataComment.map((item) => (
          <li className={style.listComments}>
            <div className={style.wrapperComments}>
              <img
                src={item.image_profile}
                alt="profile"
                className={`me-3 ${style.imgComment}`}
              />
              <div className={style.wrapper}>
                <p className={style.titleName}>{item.name}</p>
                <span className={style.comments}>{item.comment_text}</span>
              </div>
            </div>
            {item.user_id == idSplit ? (
              <div className="wrapperButton">
                <button
                  className={style.buttonEdit}
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="bi bi-pencil-square"></i>
                </button>

                <button
                  className={style.buttonDelete}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentList;
