import React, { useEffect, useState } from "react";
import style from "./videorecipe.module.css";
import Navs from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://izipizy-team.cyclic.app/api/v1/recipe/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        // router.push('/login')
      });
  }, [id]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={style.customBody}>
        <Navs />
        <main>
          <section className="container mt-4">
            <div className={`${style.grid12} ${style.gapMedium}`}>
              <div className={`${style.cusGridLg8} mx-5`}>
                <div className={style.aspectLock}>
                  <iframe
                    className={style.embedVideo}
                    src={data.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <h3 className={`${style.titleVideo} ${style.h3} my-2`}>
                    Beef Steak with Curry Sauce - [Step 4] <br /> Cut the
                    condiment and then mix it
                  </h3>
                  <p className={`${style.customDate} text-muted`}>
                    3 month ago
                  </p>
                </div>
              </div>
              <div
                className={`${style.cusGridLg4} ${style.flexCol} ${style.gapMedium}`}
              >
                <h3 className={style.h3}>Next</h3>
                <div
                  className={style.aspectLock}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <iframe
                    className={style.embedVideo}
                    src={data.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <h5 className="my-2">
                    Beef Steak with Curry Sauce - [Step 5] <br />
                    Saute condiments together until turn brown
                  </h5>
                  <p className="text-muted">3 month ago</p>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className={style.aspectLock}>
                    <iframe
                      className={style.embedVideo}
                      src={data.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <h5 className="my-2">
                    Beef Steak with Curry Sauce - [Step 6] <br />
                    Roast beef until it’s medium rare
                  </h5>
                  <p className="text-muted">3 month ago</p>
                </div>
                <div
                  className={style.aspectLock}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <iframe
                    className={style.embedVideo}
                    src={data.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <h5 className="my-2">
                    Beef Steak with Curry Sauce - [Step 7] <br />
                    Roast beef until it’s medium rare
                  </h5>
                  <p className="text-muted">3 month ago</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Video;
