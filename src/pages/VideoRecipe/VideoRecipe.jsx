import React, { useEffect } from 'react';
import style from './videorecipe.module.css';
import Navs from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Video = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={style.customBody}>
        <Navs />
        <main>
          <section class="container mt-4">
            <div class={`${style.grid12} ${style.gapMedium}`}>
              <div class={`${style.cusGridLg8} mx-5`}>
                <div class={style.aspectLock}>
                  <iframe
                    class={style.embedVideo}
                    src="https://www.youtube.com/embed/G4fSaPigWeQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <h3 class={`${style.titleVideo} ${style.h3} my-2`}>
                    Beef Steak with Curry Sauce - [Step 4] <br /> Cut the condiment and then mix it
                  </h3>
                  <p class={`${style.customDate} text-muted`}>3 month ago</p>
                </div>
              </div>
              <div class={`${style.cusGridLg4} ${style.flexCol} ${style.gapMedium}`}>
                <h3 className={style.h3}>Next</h3>
                <div class={style.aspectLock} data-aos="zoom-in-up" data-aos-duration="1000">
                  <iframe
                    class={style.embedVideo}
                    src="https://www.youtube.com/embed/Iu8pRHf5_Fg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <h5 class="my-2">
                    Beef Steak with Curry Sauce - [Step 5] <br />
                    Saute condiments together until turn brown
                  </h5>
                  <p class="text-muted">3 month ago</p>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <div class={style.aspectLock}>
                    <iframe
                      class={style.embedVideo}
                      src="https://www.youtube.com/embed/GRnjSSH6IAA"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <h5 class="my-2">
                    Beef Steak with Curry Sauce - [Step 6] <br />
                    Roast beef until it’s medium rare
                  </h5>
                  <p class="text-muted">3 month ago</p>
                </div>
                <div class={style.aspectLock} data-aos="zoom-in-up" data-aos-duration="1000">
                  <iframe
                    class={style.embedVideo}
                    src="https://www.youtube.com/embed/9aNxuytikIM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <h5 class="my-2">
                    Beef Steak with Curry Sauce - [Step 7] <br />
                    Roast beef until it’s medium rare
                  </h5>
                  <p class="text-muted">3 month ago</p>
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
