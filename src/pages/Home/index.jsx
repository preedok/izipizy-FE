// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./home.module.css";
import accsent from "../../assets/images/landing-page/Rectangle 2.png";
import heroImg from "../../assets/images/product/Product_landing.png";
import Navbar from "../../components/Navbar/navbar";
import HeadingText from "../../components/HeadingText";
import ProductText from "../../components/ProductText";
import Footer from "../../components/Footer/Footer.jsx";
import { Link, useNavigate } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // New Recipe
  const [recipe, setRecipe] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe`)
      .then((response) => {
        setRecipe(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detailRecipe/${recipe[0].id}`);
  };

  const handleDetailPopular = () => {
    navigate(`/detailRecipe/${popular[0].id}`);
  };

  const [searchRecipe, setSearchRecipe] = useState("");
  const handleSearch = () => {
    window.location.replace(`/search?search=${searchRecipe}`);
  };
  const search = async (query) => {
    setSearchRecipe(query);
  };

  const [popular, setPopular] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND}/api/v1/recipe?sortby=likes&sort=asc`
      )
      .then((response) => {
        setPopular(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(popular[0].name_recipe);

  return (
    <>
      <body className={style.body}>
        <Navbar />
        <div className={`position-relative ${style.hero}`}>
          <img src={accsent} className={style.heroAccsent} alt="accsent" />
          <div className="container position-relative">
            <div
              className={`row d-flex align-items-center vh-100 ${style.row}`}
            >
              <div
                className="col-lg-5 col-md-12 "
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <h1 className={`fw-bold ${style.textLanding}`}>
                  Discover Recipe <br /> & Delicious Food
                </h1>

                <form className="d-flex mt-4" role="search">
                  <div className={`input-group mb-3 ${style.inputGrupSearch}`}>
                    <span
                      className={`input-group-text ${style.iconSearch}`}
                      onClick={handleSearch}
                    >
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Restaurant, Food"
                      onChange={({ target }) => search(target.value)}
                    />
                  </div>
                </form>
              </div>
              <div
                className="col-lg-6  d-flex justify-content-lg-end offset-lg-1 col-md-12 col-sm-12 justify-content-sm-center"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <img
                  src={popular[0].image}
                  className={style.heroImg}
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="container ">
            <HeadingText children="Popular For You !" />

            <div className="row d-flex align-items-center overflow-hidden">
              <div
                className="col-lg-6 col-sm-12"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <div className={style.wrapperImg}>
                  <div className={style.accPopularImg} alt="popular-img" />
                  <img
                    src={popular[0].image}
                    crossOrigin="anonymous"
                    className={`position-relative ${style.popularImg}`}
                    alt="popular-img"
                  />
                </div>
              </div>

              <div
                className="col-lg-4 offset-lg-2 col-sm-12"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <ProductText
                  cta={handleDetailPopular}
                  headingTitleRecipe={popular[0].name_recipe}
                  descriptionTitleRecipe={popular[0].description}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mb-5">
          <div className="container">
            <HeadingText children="New Recipe" />
          </div>
          <div className="position-relative wh-100 pt-5">
            <div className={style.accNewRecipeImg} />

            <div className="container">
              <div className="row d-flex align-items-center  overflow-hidden">
                <div
                  className="col-lg-6 col-sm-12 p-0"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <div className={style.wrapperImg}>
                    <img
                      src={recipe[0].image}
                      crossOrigin="anonymous"
                      className={`position-relative ${style.popularImg}`}
                      alt="popular-img"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-4 offset-lg-2 col-sm-12"
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                >
                  <ProductText
                    cta={handleDetail}
                    headingTitleRecipe={recipe[0].name_recipe}
                    descriptionTitleRecipe={recipe[0].description}
                    props={recipe}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="container">
            <HeadingText children="Popular Recipe" />
          </div>

          <div className="container">
            <div className={`row ${style.rowResponsive}`}>
              {popular.map((item) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 mb-4"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                  >
                    <Link
                      className={style.span}
                      to={`/detailRecipe/${item.id}`}
                    >
                      <div className={style.wrapperImgRecipe}>
                        <img
                          src={item.image}
                          crossOrigin="anonymous"
                          className={style.imgRecipe}
                          alt="img-recipe"
                        />
                        <div className={style.wrapperTitle}>
                          <span className={style.productType}>
                            {item.name_recipe}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={style.btnChat}
          data-bs-toggle="modal"
          data-bs-target="#chat"
        >
          Chat Admin
        </button>

        <Footer />

        {/* modal  */}
        <div
          className="modal"
          id="chat"
          tabindex="-1"
          aria-labelledby="chatLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="chatLabel">
                  Chat Admin
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 me-auto text-start">
                      <div className={style.chatAdmin}>
                        Hallo, ada yg bisa dibantu
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 ms-auto text-end">
                      <div className={style.chatUser}>saya ingin bertanya</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer text-center d-flex">
                <div className="form-floating position-relative">
                  <input
                    type="text-area"
                    className={`form-control ${style.formChat}`}
                  />
                  <button className={style.buttonSend}>
                    <i class="bi bi-send-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
