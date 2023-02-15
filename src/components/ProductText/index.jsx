import React from 'react';
import style from './product.module.css';

const ProductText = ({ headingTitleRecipe, descriptionTitleRecipe }) => {
  return (
    <>
      <h2 className={style.titleRecipe}>{headingTitleRecipe}</h2>
      <hr className={style.hr} />

      <p className={style.descriptionTitle}>{descriptionTitleRecipe}</p>

      <button className={style.ctaMore}>Learn More</button>
    </>
  );
};

export default ProductText;
