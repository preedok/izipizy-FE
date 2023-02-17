import React, { useEffect } from "react";
import style from "./home.module.css";
import accsent from "../../assets/images/landing-page/Rectangle 2.png";
import heroImg from "../../assets/images/product/Product_landing.png";
import popularImg from "../../assets/images/product/product_popular.png";
import newImg from "../../assets/images/product/Rectangle 313.png";

// img product
import img1 from "../../assets/images/product/Rectangle 314.png";
import img2 from "../../assets/images/product/Rectangle 315.png";
import img3 from "../../assets/images/product/Rectangle 316.png";
import img4 from "../../assets/images/product/Rectangle 317.png";
import img5 from "../../assets/images/product/Rectangle 318.png";
import img6 from "../../assets/images/product/Rectangle 319.png";

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

  const recipeProduct = [
    {
      title: "Chicken Kare",
      id: 1,
      title: "Chicken Kare",
      image: `${img1}`,
    },
    {
      title: "Bomb Chicken",
      id: 2,
      title: "Bomb Chicken",
      image: `${img2}`,
    },
    {
      title: "Banana Smothie Pop",
      id: 3,
      title: "Banana Smothie Pop",
      image: `${img3}`,
    },
    {
      title: "Coffe Lava Cake",
      id: 4,
      title: "Coffe Lava Cake",
      image: `${img4}`,
    },
    {
      title: "Sugar Salmon",
      id: 5,
      title: "Sugar Salmon",
      image: `${img5}`,
    },
    {
      title: "Indian Salad",
      id: 6,
      title: "Indian Salad",
      image: `${img6}`,
    },
  ];

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate("/detailRecipe");
  };

  return (
    <body className={style.body}>
      <Navbar />
      <div className={`position-relative ${style.hero}`}>
        <img src={accsent} className={style.heroAccsent} alt="accsent" />
        <div className="container position-relative">
          <div className={`row d-flex align-items-center vh-100 ${style.row}`}>
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
                  <span className={`input-group-text ${style.iconSearch}`}>
                    <i class="bi bi-search"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Restaurant, Food"
                    aria-label="Search"
                  />
                </div>
              </form>
            </div>
            <div
              className="col-lg-6  d-flex justify-content-lg-end offset-lg-1 col-md-12 col-sm-12 justify-content-sm-center"
              data-aos="zoom-in-left"
              data-aos-duration="1000"
            >
              <img src={heroImg} className={style.heroImg} alt="hero-img" />
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
                  src={popularImg}
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
                headingTitleRecipe="Healthy Bone Broth Ramen (Quick & Easy)"
                descriptionTitleRecipe="Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!"
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
                    src={newImg}
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
                  headingTitleRecipe="Healthy Bone Broth Ramen (Quick & Easy)"
                  descriptionTitleRecipe="Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!"
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
            {recipeProduct.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-sm-6 mb-4"
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                >
                  <Link className={style.span} to="">
                    <div className={style.wrapperImgRecipe}>
                      <img
                        src={item.image}
                        className={style.imgRecipe}
                        alt="img-recipe"
                      />
                      <div className={style.wrapperTitle}>
                        <span className={style.productType}>{item.title}</span>
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
                  className={` ${style.formChat}`}
                  placeholder="Kirimkan Pesan"
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
  );
};

export default Home;
