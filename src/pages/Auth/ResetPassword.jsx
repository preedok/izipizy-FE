import React from 'react';
import style from './auth.module.css';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import InputAuth from '../../components/InputAuth/InputAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useParams, useEffect } from 'react';

const ResetPassword = () => {
  const Navigate = useNavigate();
  //state
  const [form, setForm] = useState({
    password: '',
    repeatpassword: '',
  });

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getDataById();
  }, []);

  //function "getPostById"
  const getDataById = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/v1/user/login/${id}`);
    //get response data
    const data = await response.data.data;

    //assign data to state
    setForm(data.password);
  };

  //function "updateData"
  const updateData = async (e) => {
    e.preventDefault();
    if (form.password == '' || form.repeatpassword == '') {
      alert('password harus input');
    } else {
      const body = {
        password: form.password,
        repeatpassword: form.repeatpassword,
      };
      if (form.password !== form.repeatpassword) {
        alert('Password dan Repeat password tidak sama');
      } else {
        //send data to server
        await axios
          .put(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`, body)
          .then((response) => {
            //redirect
            console.log(response.data);
            // alert("Update password successfully");
            // return Navigate("/Profile");
          })
          .catch((error) => {
            //assign validation on state
            console.log(error);
          });
      }
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
                    <form>
                      <InputAuth TypeInput="password" Label="Create New Password" PlaceHolder="" />
                      <InputAuth TypeInput="password" Label="New Password" PlaceHolder="" />
                      <div className="mb-3 form-group">
                        <input id="" type="checkbox" className={style.checkboxCustom} />
                        <label style={{ color: '#696f79' }} className="ms-1 form-check-label mb-3">
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                      <div className="mb-3 form-group d-flex justify-content-center">
                        <ButtonAuth Button="Reset Password" />
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

export default ResetPassword;
