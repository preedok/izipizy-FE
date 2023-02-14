import React from "react";
import style from "./style.module.css";

const Add = () => {
  return (
    <section>
      <div className={style.boxContainer}>
        <div className={style.box}>
          <form>
            <div className={style.containerOne}>
              <div className={style.inputImage}>
                <img
                  src={require("../../assets/images/profile/icon-image.png")}
                  alt=""
                  for="image"
                  className={style.labelImage}
                />
                <input type="file" style={{ display: "none" }} />
                <h4 for="image" name="image" className={style.labelImage}>
                  Add image
                </h4>
              </div>
              <div className={style.inputGr}>
                <label for="title" name="title"></label>
                <input
                  type="text"
                  className={style.inputTitle}
                  placeholder="Title"
                />
                <textarea
                  cols="30"
                  rows="10"
                  className={style.inputIngredients}
                  placeholder="Ingredients"
                ></textarea>

                <label for="vidio" name="vidio"></label>
                <input
                  type="text"
                  className={style.inputVidio}
                  placeholder="Vidio"
                />
              </div>
            </div>

            <a>
              <button class={`${style.mbFooter} ${style.btnSend}`}>Send</button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Add;
