import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import packageIcon from "../../assets/images/profile/icon-image.png";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Add = () => {
  const navigate = useNavigate();
  const [insertProduct, setInsertProduct] = useState({
    name_recipe: "",
    ingredients: "",
    video: "",
    description: "",
  });

  const [imageProduct, setImageProduct] = useState();
  const [previewImage, setPreviewImage] = useState();
  const handleChangeProduct = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("addImage").innerHTML = fileUploaded.name_recipe;
    setImageProduct(fileUploaded);
    setPreviewImage([URL.createObjectURL(event.target.files[0])]);
  };

  const onSubmitInsertProduct = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let inputForm = new FormData();
    inputForm.append("name_recipe", insertProduct.name_recipe);
    inputForm.append("ingredients", insertProduct.ingredients);
    inputForm.append("video", insertProduct.video);
    inputForm.append("description", insertProduct.description);
    inputForm.append("image", imageProduct);
    axios
      .post(`https://izipizy-team.cyclic.app/api/v1/recipe/`, inputForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Product Added",
          text: `New product have been added`,
          icon: "success",
        });
        return navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.customBody}>
      <main>
        <section>
          <div className="container mt-5">
            <form className="mx-5">
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <div className={style.rectangle}>
                  <div>
                    <img
                      src={previewImage ? previewImage : packageIcon}
                      alt=""
                      className={`${style.imageAdd} mt-2`}
                      id="addImage"
                    />
                  </div>
                  <input
                    className={style.input}
                    type="file"
                    id="addImage"
                    src={previewImage ? previewImage : packageIcon}
                    onChange={handleChangeProduct}
                  />
                </div>
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <input
                  type="text"
                  className={`form-control ${style.input}`}
                  placeholder="Title"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setInsertProduct({
                      ...insertProduct,
                      name_recipe: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <textarea
                  className={`form-control ${style.textArea}`}
                  placeholder="Ingredients"
                  type="text"
                  onChange={(e) => {
                    setInsertProduct({
                      ...insertProduct,
                      ingredients: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <input
                  className={`form-control ${style.input}`}
                  placeholder="Video"
                  type="text"
                  onChange={(e) => {
                    setInsertProduct({
                      ...insertProduct,
                      video: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <textarea
                  className={`form-control ${style.textArea}`}
                  placeholder="description"
                  type="text"
                  onChange={(e) => {
                    setInsertProduct({
                      ...insertProduct,
                      description: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  onClick={onSubmitInsertProduct}
                  type="submit"
                  className={`btn ${style.btnCustomArea}`}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Add;
