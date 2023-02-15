import React from "react";
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
import { Link } from "react-router-dom";

const Home = () => {
  const recipeProduct = [
    {
      title: "Chicken Kare",
      image: `${img1}`,
    },
    {
      title: "Bomb Chicken",
      image: `${img2}`,
    },
    {
      title: "Banana Smothie Pop",
      image: `${img3}`,
    },
    {
      title: "Coffe Lava Cake",
      image: `${img4}`,
    },
    {
      title: "Sugar Salmon",
      image: `${img5}`,
    },
    {
      title: "Indian Salad",
      image: `${img6}`,
    },
  ];

  return (
    <body className={style.body}>
      <Navbar />
      <div className="position-relative">
        <img src={accsent} className={style.heroAccsent} alt="accsent" />
        <div className="container position-relative">
          <div className={`row d-flex align-items-center vh-100 ${style.row}`}>
            <div className="col-lg-5 col-md-12 ">
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
            <div className="col-lg-6 d-flex justify-content-end offset-lg-1 col-md-12 ">
              <img src={heroImg} className={style.heroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="container ">
          <HeadingText children="Popular For You !" />
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className={style.wrapperImg}>
                <div className={style.accPopularImg} alt="popular-img" />
                <img
                  src={popularImg}
                  className={`position-relative ${style.popularImg}`}
                  alt="popular-img"
                />
              </div>
            </div>

            <div className="col-lg-4 offset-lg-2 col-sm-12">
              <ProductText
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
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-sm-12 ">
                <div className={style.wrapperImg}>
                  <img
                    src={newImg}
                    className={`position-relative ${style.popularImg}`}
                    alt="popular-img"
                  />
                </div>
              </div>
              <div className="col-lg-4 offset-lg-2 col-sm-12">
                <ProductText
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
          <div className="row ">
            {recipeProduct.map((item) => {
              return (
                <div className="col-lg-4 mb-4">
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

      <Footer />
    </body>
  );
};

export default Home;
