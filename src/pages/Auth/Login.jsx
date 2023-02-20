import React, { useRef, useEffect } from "react";
import HeaderAuth from "../../components/HeadingText/HeaderAuth";
import style from "./auth.module.css";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
// import InputAuth from '../../components/InputAuth/InputAuth';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LineWave } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/v1/user/login`, form)
      .then((response) => {
<<<<<<< HEAD
        if (response.data.status !== 'success') {
          Swal.fire({
            title: 'Login Failed',
            text: `${response.data.message}`,
            icon: 'warning',
          });
=======
        console.log(response);
        if (response.data.status !== "success") {
          alert(response.data.message);
>>>>>>> 3edae89157730a14ace0cf17c3bbd5a463e51e3e
        } else {
          const token = response.data.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("users", JSON.stringify(response.data.data));
          localStorage.setItem(
            "email",
            JSON.stringify(response.data.data.email)
          );
          localStorage.setItem("name", JSON.stringify(response.data.data.name));
          localStorage.setItem("id", JSON.stringify(response.data.data.id));
        }
        Swal.fire({
<<<<<<< HEAD
          title: 'Login Success',
          text: `${response.data.message}`,
          icon: 'success',
=======
          title: "Login Success",
          text: `Login Success!`,
          icon: "success",
>>>>>>> 3edae89157730a14ace0cf17c3bbd5a463e51e3e
        });
        return navigate("/profile");
      })
      .catch((error) => {
        Swal.fire({
<<<<<<< HEAD
          title: 'Login Failed',
          text: `${error.response.data.message}`,
          icon: 'warning',
=======
          title: "Login Failed",
          text: `Make sure your data is correct!`,
          icon: "warning",
>>>>>>> 3edae89157730a14ace0cf17c3bbd5a463e51e3e
        });
      });
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
          paddingLeft: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#efc81a",
        }}
      >
        <LineWave
          height="145"
          width="140"
          color="white"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    );
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`${style.bgImage} col-md-6 bg-image align-items-center`}
          >
            <div>
              <img
                className={style.logoCustom}
                src={require("../../assets/images/auth/barbecue 1.png")}
                alt=""
              />
              <p className="text-center mt-2 fw-semibold text-white">
                Mama Recipe.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`${style.login} login d-flex align-items-center py-5`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <HeaderAuth
                      TitleAuth="Welcome"
                      SpanAuth="Log in into your exiting account"
                    />
                    <form onSubmit={login}>
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="formLabel"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Examplexxx@gmail.com"
                          name="email"
                          id="email"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              email: e.target.value,
                            })
                          }
                          value={form.email}
                          className={`${style.input} form-control mt-2`}
                          aria-describedby=""
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <label
                          style={{ color: "#696f79" }}
                          className="formLabel"
                        >
                          Password
                        </label>
                        <input
                          placeholder="Password"
                          name="password"
                          type="password"
                          id="password"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              password: e.target.value,
                            })
                          }
                          className={`${style.input} form-control mt-2`}
                          value={form.password}
                          aria-describedby=""
                        />
                      </div>
                      {/* <InputAuth TypeInput="email" Label="Email" PlaceHolder="Examplexxx@gmail.com" Value="{email}" OnChange="{(e) => setEmail(e.target.value)}" />
                      <InputAuth TypeInput="password" Label="Password" PlaceHolder="Password" Value="{password}" OnChange="{(e) => setPassword(e.target.value)}" /> */}
                      <div className="mb-3 form-group">
                        <input
                          id=""
                          type="checkbox"
                          className={style.checkboxCustom}
                        />
                        <label
                          style={{ color: "#696f79" }}
                          className="ms-1 form-check-label mb-3"
                        >
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                      <div className="mb-3 form-group d-flex justify-content-center">
                        <ButtonAuth Button="Log in" />
                      </div>
                      <div style={{ textAlign: "right" }} className="mt-3">
                        <Link
                          className={`${style.anchorText} small text-decoration-none text-secondary`}
                          to="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <hr />
                      <div className="mt-3 text-center">
                        <span className={`${style.haveAccount} mb-3`}>
                          Don't have an account?{" "}
                        </span>
                        <Link
                          className={`${style.anchorText} small text-decoration-none text-warning`}
                          to="/register"
                        >
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
