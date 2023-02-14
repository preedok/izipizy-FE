import React from "react";
import style from "./videorecipe.module.css";

const Video = () => {
  return (
    <>
      <section>
        <div className={style.boxContainerVidio}>
          <div className={style.object}></div>
          <div className={style.containerVidio}>
            <div className={style.boxVidio}>
              <div className={style.displayVidio}>
                <iframe
                  width="820"
                  height="580"
                  src="https://www.youtube.com/embed/ggeb4lXdPYo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className={style.vidio}
                ></iframe>
                <div className={style.titleVidio}>
                  <h1>
                    Beef Steak with Curry Sauce - [Step 4] Cut the condiment and
                    then mix it
                  </h1>
                  <p>1 day ago</p>
                </div>
              </div>
            </div>
            <div className={style.ctList}>
              <h2 className={style.nextVidio}>Next</h2>
              <div className={style.listVidio}>
                <div className={style.vidioOne}>
                  <iframe
                    width="230"
                    height="110"
                    src="https://www.youtube.com/embed/ggeb4lXdPYo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className={style.vidio}
                  ></iframe>
                  <h4>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                  </h4>
                  <p>HanaLohana - 1 day ago</p>
                </div>
                <div className={style.vidioOne}>
                  <iframe
                    width="230"
                    height="110"
                    src="https://www.youtube.com/embed/ggeb4lXdPYo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className={style.vidio}
                  ></iframe>
                  <h4>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                  </h4>
                  <p>HanaLohana - 1 day ago</p>
                </div>
                <div className={`${style.vidioOne} ${style.three}`}>
                  <iframe
                    width="230"
                    height="110"
                    src="https://www.youtube.com/embed/ggeb4lXdPYo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className={style.vidio}
                  ></iframe>
                  <h4>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                  </h4>
                  <p>HanaLohana - 1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Video;
