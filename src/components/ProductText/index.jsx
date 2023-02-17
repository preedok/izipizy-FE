import React from 'react';
import style from './product.module.css';

const ProductText = ({ cta, headingTitleRecipe, descriptionTitleRecipe, props }) => {
  return (
    <>
      <h2 className={style.titleRecipe}>{headingTitleRecipe}</h2>
      <hr className={style.hr} />

      <p className={style.descriptionTitle}>{descriptionTitleRecipe}</p>

      <button type="button" onClick={cta} className={style.ctaMore}>
        Learn More
      </button>
    </>
  );
};

export default ProductText;
