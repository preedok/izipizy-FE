import React from 'react';
import Form from '../../components/Form/FormAdd';
import Footer from '../../components/Footer/Footer';
import Navs from '../../components/Navbar/navbar';
import NavbarLogin from '../../components/NavbarLogin';

const addrecipe = () => {
  const isLogin = localStorage.getItem('token');
  return (
    <>
      {!isLogin ? <Navs /> : <NavbarLogin />}
      <Form />
      <Footer />
    </>
  );
};
export default addrecipe;
