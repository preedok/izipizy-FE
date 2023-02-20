import React, { useEffect, useState } from 'react';
import HeadingPagination from '../../components/HeadingPagination';
import Navbar from '../../components/Navbar/navbar';
import axios from 'axios';

import CardRecipe from '../../components/CardRecipe';

const Popular = () => {
  const [popular, setPopular] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe?sortby=likes&sort=asc&limit=1000`)
      .then((response) => {
        setPopular(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <HeadingPagination children="All Popular" />
        <div className="row">
          <CardRecipe data={popular} />
        </div>
      </div>
    </>
  );
};

export default Popular;
