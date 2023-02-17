import React from 'react';
import HeaderAuth from '../../components/HeadingText/HeaderAuth';
import style from './auth.module.css';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
// import InputAuth from '../../components/InputAuth/InputAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://izipizy-team.cyclic.app/api/v1/user/login`, { email, password });

      localStorage.setItem('token', response.data.data.token);

      if (localStorage.getItem('token')) {
        Swal.fire({
          title: 'Login Success',
          text: 'Your account has been successfully logged in',
          icon: 'success',
        });
        Navigate('/');
        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        title: 'Login Failed',
        text: 'Make sure your email or password is correct!',
        icon: 'warning',
      });
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={`${style.bgImage} col-md-6 bg-image align-items-center`}>
            <div>
              <img className={style.logoCustom} src={require('../../assets/images/auth/barbecue 1.png')} alt="" />
              <p className="text-center mt-2 fw-semibold text-white">Mama Recipe.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${style.login} login d-flex align-items-center py-5`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <HeaderAuth TitleAuth="Welcome" SpanAuth="Log in into your exiting account" />
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Email
                        </label>
                        <input type="email" placeholder="Examplexxx@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Password
                        </label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      {/* <InputAuth TypeInput="email" Label="Email" PlaceHolder="Examplexxx@gmail.com" Value="{email}" OnChange="{(e) => setEmail(e.target.value)}" />
                      <InputAuth TypeInput="password" Label="Password" PlaceHolder="Password" Value="{password}" OnChange="{(e) => setPassword(e.target.value)}" /> */}
                      <div className="mb-3 form-group">
                        <input id="" type="checkbox" className={style.checkboxCustom} />
                        <label style={{ color: '#696f79' }} className="ms-1 form-check-label mb-3">
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                      <div className="mb-3 form-group d-flex justify-content-center">
                        <ButtonAuth Button="Log in" />
                      </div>
                      <div style={{ textAlign: 'right' }} className="mt-3">
                        <Link className={`${style.anchorText} small text-decoration-none text-secondary`} to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <hr />
                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3`}>Don't have an account? </span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} to="/register">
                          Sign Up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
