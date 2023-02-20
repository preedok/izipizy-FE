import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import axios from 'axios';

import style from './detail.module.css';

import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import CommentList from '../../components/CommentList';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailRecipe = () => {
  // effect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { id } = useParams();
  // get recipe by id recipe
  const [recipe, setRecipe] = useState([{}]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleVideo = () => {
    navigate(`/video/${id}`);
  };

  // create like
  let count = `${recipe.liked_count}`; //ambil dari data recipe.like
  const [likes, setLikes] = useState({
    recipe_id: `${id}`,
  });

  console.log(likes);

  const [likeActive, setLikeActive] = useState(false);

  const handleLike = () => {
    if (!likeActive) {
      setLikeActive(true);
      axios
        .post(`${process.env.REACT_APP_BACKEND}/api/v1/liked`, likes, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success',
            text: `${response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.message}`,
          });
        });
    }
  };

  let ingredient = `${recipe.ingredients}`;
  let split = ingredient.split('-');
  split.shift();

  // create comment
  const [comments, setComments] = useState({
    comment_text: '',
    recipe_id: `${id}`,
  });

  const handleChange = (e) => {
    setComments({
      ...comments,
      [e.target.name]: e.target.value,
    });
  };

  const token = localStorage.getItem('token');
  const handleSendComment = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/v1/comment`, comments, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success',
          text: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`,
        });
      });
  };

  // get data comment by user id
  const [dataComment, setDataComments] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/comment/recipe/${id}`)
      .then((response) => {
        setDataComments(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <body className={style.body}>
      <div className="container-fluid">
        <div className="container">
          <Navbar />
          <div className="row text-center mt-4">
            <div className="col-lg-12" data-aos="zoom-in-left" data-aos-duration="1000">
              <h1 className={`fw-bold ${style.textLanding}`}>{recipe.name_recipe}</h1>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-12 text-center" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className={style.wrapperImg}>
                <img src={recipe.image} crossOrigin="anonymous" className={`position-relative ${style.detailImg}`} alt="popular-img" />

                <div className={style.wrapperButton}>
                  <button className={style.buttonSave}>
                    <i className="bi bi-bookmark"></i>
                  </button>
                  <button className={style.buttonLike} onClick={handleLike}>
                    <i className="bi bi-hand-thumbs-up"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-12" data-aos="zoom-in-left" data-aos-duration="1000">
              <h5 className="fw-bolder">Ingredients</h5>
              <ul type="stripe">
                {split.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-3" data-aos="zoom-in-right" data-aos-duration="1000">
              <h5 className="fw-bolder mb-4">Video Step</h5>

              <button type="button" className={style.buttonStepVideo} onClick={handleVideo}>
                <i class="bi bi-play"></i>
              </button>
            </div>
          </div>

          <div className="row text-center mb-5">
            <div className="col-lg-12" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className="form-floating mb-3">
                <form onSubmit={handleSendComment}>
                  <input
                    className={`form-control ${style.formControl}`}
                    style={{ height: '200px', backgroundColor: '#efefef' }}
                    placeholder="Leave a comment here"
                    type="text"
                    name="comment_text"
                    value={comments.comment_text}
                    onChange={handleChange}
                  ></input>

                  <button type="submit" className={`mt-3 ${style.buttonSend}`}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="zoom-in-left" data-aos-duration="1000">
              <h5 className="fw-bolder mb-4">Comment</h5>
            </div>

            <div className="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1000">
              {dataComment.length > 0 ? <CommentList dataComment={dataComment} /> : <p>Comment not found!</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default DetailRecipe;
