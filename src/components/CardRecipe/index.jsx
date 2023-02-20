import React, { useEffect, useState } from 'react';
import style from './card.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner';

const CardRecipe = ({ data }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [loadingSorting, setLoadingSorting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingSorting(false);
    }, 2000);
  }, []);

  if (loadingSorting) {
    return (
      <div
        style={{
          paddingLeft: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#efc81a',
        }}
      >
        <LineWave height="145" width="140" color="white" ariaLabel="line-wave" wrapperStyle={{}} wrapperClass="" visible={true} firstLineColor="" middleLineColor="" lastLineColor="" />
      </div>
    );
  }

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
