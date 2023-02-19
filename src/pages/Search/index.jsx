import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './search.module.css';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/navbar';
import NavbarLogin from '../../components/NavbarLogin';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Search = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [searchRecipes, setSearchRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const url = searchParams.get('search');

  const api = async () => {
    setLoading(true);
    await axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe?search=${url}`).then((response) => {
      console.log(response.data.data);
      setSearchRecipes(response.data.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    api();
    if (!loading) {
      // console.log(searchRecipes);
    }
  }, []);

  const isLogin = localStorage.getItem('token');
  console.log(searchRecipes);
  return loading ? (
    'loading...'
  ) : (
    <>
      {!isLogin ? <Navbar /> : <NavbarLogin />}
      <div className="container">
        <div className="row">
          <h3 className="mb-3">{`Search ${url}...`}</h3>

          {searchRecipes?.map((item) => (
            <>
              <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="zoom-in-right" data-aos-duration="1000">
                <Link className={style.span} to={`/detailRecipe/${item.id}`}>
                  <div className={style.wrapperImgRecipe}>
                    <img src={item.image} crossOrigin="anonymous" className={style.imgRecipe} alt="img-recipe" />
                    <div className={style.wrapperTitle}>
                      <span className={style.productType}>{item.name_recipe}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
