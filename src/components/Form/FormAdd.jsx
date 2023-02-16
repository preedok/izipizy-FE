import React, { useEffect } from 'react';
import style from './style.module.css';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Add = () => {
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
                    <img src={require('../../assets/images/profile/icon-image.png')} alt="" className={style.imageAdd} id="customBtn" />
                  </div>

                  <h5 className="text-muted" id="customBtn">
                    Add image
                  </h5>
                </div>
                <input className={style.input} type="file" id="formFile" style={{ display: 'none' }} />
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <input type="text" className={`form-control ${style.input}`} id="exampleInputEmail1" placeholder="Title" aria-describedby="emailHelp" name="title" />
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <textarea className={`form-control ${style.textArea}`} id="exampleFormControlTextarea1" rows="3" placeholder="Ingredients" name="ingredient"></textarea>
              </div>
              <div className="mb-3" data-aos="zoom-in" data-aos-duration="1000">
                <textarea className={`form-control ${style.textArea}`} id="exampleFormControlTextarea1" rows="1" placeholder="Video" name="videostep"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className={`btn ${style.btnCustomArea}`}>
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
