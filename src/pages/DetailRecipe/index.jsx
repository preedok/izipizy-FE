import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import style from './detail.module.css';

import imgProfile from '../../assets/images/profile/Ellipse 128.png';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import CommentList from '../../components/CommentList';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([{}]);

  useEffect(() => {
    axios
      .get(`https://izipizy-team.cyclic.app/api/v1/recipe/${id}`)
      .then((response) => {
        setRecipe(response.data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  const handleVideo = () => {
    navigate('/video');
  };

  let count = 0;
  const handleLike = () => {
    count++;
    console.log(count);
  };

  let ingredient = `${recipe.ingredients}`;
  let split = ingredient.split('-');

  const [comments, setComments] = useState([
    {
      comment_text: '',
      recepe_id: `${id}`,
    },
  ]);

  const handleChange = (e) => {
    setComments({
      ...setComments,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendComment = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment_text', comments.comment_text);
    formData.append('recepe_id', comments.recepe_id);
    axios
      .post('https://izipizy-team.cyclic.app/api/v1/comment', formData)
      .then((res) => {
        console.log(res);
        alert('Comment Added');
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

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
                  <textarea
                    className={`form-control ${style.formControl}`}
                    style={{ height: '300px', backgroundColor: '#efefef' }}
                    placeholder="Leave a comment here"
                    name="comment"
                    type="text"
                    value={comments.comment_text}
                    onChange={handleChange}
                  ></textarea>
                </form>
              </div>

              <button type="submit" className={style.buttonSend}>
                Send
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="zoom-in-left" data-aos-duration="1000">
              <h5 className="fw-bolder mb-4">Comment</h5>
            </div>
            <div className="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1000">
              <CommentList profile={imgProfile} name="Ayudia" comment="Nice recipe. simple and delicious, thankyou" />

              <CommentList profile={imgProfile} name="Ayudia" comment="Nice recipe. simple and delicious, thankyou" />

              <CommentList profile={imgProfile} name="Ayudia" comment="Nice recipe. simple and delicious, thankyou" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default DetailRecipe;
