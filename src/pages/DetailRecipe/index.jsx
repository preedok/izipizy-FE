import React, { useEffect } from 'react';
// import axios from 'axios';

import style from './detail.module.css';
import img from '../../assets/images/product/Product_landing.png';
import imgProfile from '../../assets/images/profile/Ellipse 128.png';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import CommentList from '../../components/CommentList';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';

const DetailRecipe = () => {
  // const { id } = useParams();

  // const [recipe, setRecipe] = useState([{}]);

  // useEffect(() => {
  // dispatch(getDetailRecipe(setRecipe));
  // }, []);

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

  return (
    <body className={style.body}>
      <div className="container-fluid">
        <div className="container">
          <Navbar />

          <div className="row text-center mt-4">
            <div className="col-lg-12" data-aos="zoom-in-left" data-aos-duration="1000">
              <h1 className={`fw-bold ${style.textLanding}`}>Bone Broth Ramen</h1>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-12 text-center" data-aos="zoom-in-right" data-aos-duration="1000">
              <div className={style.wrapperImg}>
                <img src={img} className={`position-relative ${style.detailImg}`} alt="popular-img" />

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
                <li>2 Eggs</li>
                <li>2 Tbsp Mayonaise</li>
                <li>3 Slices Bread</li>
                <li>A Little Butter</li>
                <li>
                  <sup>1</sup>/<sub>3</sub> Carton Of Cress
                </li>
                <li>2 - 3 Slice Of Tomato Or A Lettuces Leaf And A Slices Of Ham Or Cheese</li>
                <li>Crips, To Serve</li>
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
                <textarea className={`form-control ${style.formControl}`} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '300px', backgroundColor: '#efefef' }}></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>

              <button className={style.buttonSend}>Send</button>
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
