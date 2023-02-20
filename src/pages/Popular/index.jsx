import React, { useEffect, useState } from 'react';
import HeadingPagination from '../../components/HeadingPagination';
import Navbar from '../../components/Navbar/navbar';
import axios from 'axios';
import styles from './popular.module.css';
import { LineWave } from 'react-loader-spinner';

import CardRecipe from '../../components/CardRecipe';

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [asc, setAsc] = useState('asc');

  useEffect(() => {
    getPopular(asc);
  }, []);

  const getPopular = (asc, e) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/recipe?sortby=likes&sort=${asc}&limit=1000`)
      .then((response) => {
        setPopular(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSortasc = () => {
    if (asc === 'asc') {
      setAsc('desc');
      console.log(asc);
    } else {
      setAsc('asc');
    }
    getPopular(asc);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
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
      <Navbar />
      <div className="container">
        <HeadingPagination children="All Popular" />

        <div className="dropdown mb-2">
          <button className={`btn btn-outline-warning mb-3 mt-3 dropdown-toggle ${styles.spanCostumsort}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleSortasc()}>
              Sortir by {asc}
            </li>
          </ul>
        </div>

        <div className="row">
          <CardRecipe data={popular} />
        </div>
      </div>
    </>
  );
};

export default Popular;
