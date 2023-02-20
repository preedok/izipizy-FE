import React, { useEffect } from 'react';
import style from './card.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CardRecipe = ({ data }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="zoom-in-down" data-aos-duration="1000">
          <Link className={style.span} to={`/detailRecipe/${item.id}`}>
            <div className={style.wrapperImgRecipe}>
              <img src={item.image} crossOrigin="anonymous" className={style.imgRecipe} alt="img-recipe" />
              <div className={style.wrapperTitle}>
                <span className={style.productType}>{item.name_recipe}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardRecipe;
