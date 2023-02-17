import React, { useState } from 'react';
import HeaderAuth from '../../components/HeadingText/HeaderAuth';
import style from './register.module.css';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
// import InputAuth from '../../components/InputAuth/InputAuth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () => {
  const Navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataUser.name === '' || dataUser.email === '' || dataUser.password === '' || dataUser.phone === '' || dataUser.confirmPassword === '') {
      Swal.fire({
        title: 'Register Failed',
        text: 'Make sure your data is correct!',
        icon: 'failed',
      });
    }
    const body = {
      name: dataUser.name,
      email: dataUser.email,
      password: dataUser.password,
      phone: dataUser.phone,
      confirmPassword: dataUser.confirmPassword,
    };
    if (dataUser.confirmPassword !== dataUser.password) {
      Swal.fire({
        title: 'Register',
        text: 'Password not match!',
        icon: 'error',
        dangerMode: true,
      }).then(async (confirm) => {
        if (confirm) {
        }
      });
    }
    axios
      .post(`https://izipizy-team.cyclic.app/api/v1/user/register`, dataUser)
      .then((response) => {
        if (response.data.code !== 200) {
          Swal.fire({
            title: 'Account Registered',
            text: 'Log In to your account now!',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Account Registered',
            text: 'Log In to your account now!',
            icon: 'success',
          });
        }
        return Navigate('/login');
      })
      .catch((err) => {
        Swal.fire({
          title: 'Register Failed',
          text: 'Make sure your data is correct!',
          icon: 'failed',
        });
      });
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
                    <HeaderAuth TitleAuth="Let's Get Started" SpanAuth="Create new account to access all features" />
                    <form>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Name
                        </label>
                        <input type="text" placeholder="Name" className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Email Address*
                        </label>
                        <input type="email" placeholder="Enter email address" className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Phone Number
                        </label>
                        <input type="number" placeholder="08xxxxxxxxxx" className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          Create New Password
                        </label>
                        <input type="password" placeholder="Create New Password" className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      <div className="mb-3 form-group">
                        <label style={{ color: '#696f79' }} className="formLabel">
                          New Password
                        </label>
                        <input type="password" placeholder="New Password" className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
                      </div>
                      {/* <InputAuth TypeInput="text" Label="Name" PlaceHolder="Name" />
                      <InputAuth TypeInput="email" Label="Email Address*" PlaceHolder="Enter email address" />
                      <InputAuth TypeInput="number" Label="Phone Number" PlaceHolder="08xxxxxxxxxx" />
                      <InputAuth TypeInput="password" Label="Create New Password" PlaceHolder="Create New Password" />
                      <InputAuth TypeInput="password" Label="New Password" PlaceHolder="New Password" /> */}
                      <div className="mb-3 form-group">
                        <input id="" type="checkbox" className={style.checkboxCustom} />
                        <label style={{ color: '#696f79' }} className="ms-1 form-check-label mb-3">
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                      <div className="mb-3 form-group d-flex justify-content-center">
                        <ButtonAuth Button="Register Account" />
                      </div>
                      <div style={{ textAlign: 'right' }} className="mt-3">
                        <Link className={`${style.anchorText} small text-decoration-none text-secondary`} to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <hr />
                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3`}>Already have account? </span>
                        <Link className={`${style.anchorText} small text-decoration-none text-warning`} to="/login">
                          Log in Here
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

export default Register;
