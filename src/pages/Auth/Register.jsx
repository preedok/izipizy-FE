import React from 'react';
import HeaderAuth from '../../components/HeadingText/HeaderAuth';
import style from './register.module.css';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import InputAuth from '../../components/InputAuth/InputAuth';
import { Link } from 'react-router-dom';

const Register = () => {
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
                      <InputAuth Label="Name" PlaceHolder="Name" />
                      <InputAuth Label="Email Address*" PlaceHolder="Enter email address" />
                      <InputAuth Label="Phone Number" PlaceHolder="08xxxxxxxxxx" />
                      <InputAuth Label="Create New Password" PlaceHolder="Create New Password" />
                      <InputAuth Label="New Password" PlaceHolder="New Password" />
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
