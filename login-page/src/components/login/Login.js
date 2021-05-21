
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Login.module.css";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import config from "../../config";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();

  const onSubmit = (data, e) => {
    setMessage({
      data: "Login is in progress...",
      type: "alert-warning",
    });
    fetch(`${config.baseUrl}/login`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ errors, data }) => {
        setMessage({
          data: errors || "Logged in berhasil, redirecting...",
          type: errors ? "alert-danger" : "alert-success",
        });

        !errors &&
          setTimeout(() => {
            // localStorage.setItem("token", data.user.access_token);
            history.push("/dashboard");
          }, 3000);
        !errors && e.target.reset();
      });
  };

  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.loginFormContainer}>
        {message && (
          <div
            className={`alert fade show d-flex ${message.type}`}
            role="alert"
          >
            {message.data}
            <span
              aria-hidden="true"
              className="ml-auto cursor-pointer"
              onClick={() => setMessage(null)}
            >
              &times;
            </span>
          </div>
        )}
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.loginFormLegend} border rounded p-1 text-center`}
          >
            Login 
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
                        <div className="form-group">
                            <label htmlFor="inputForUsername">Username</label>
                            <span className="mandatory">*</span>
                            <input
                                id="inputForUsername"
                                name='username'
                                type="string"
                                className="form-control"
                                aria-describedby="Enter Username"
                                placeholder="Enter Username"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "Please enter your username",
                                    },
                                    
                                    maxLength: {
                                        value: 255,
                                        message: "Maximum 255 characters are allowed",
                                    },
                                })}
                            />
                            {errors.username && (
                                <span className={`${styles.errorMessage} mandatory`}>
                                {errors.username.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputForPassword">Password</label>
                            <span className="mandatory">*</span>
                            <input
                                name='password'
                                type="password"
                                className="form-control"
                                id="inputForPassword"
                                placeholder="Enter password"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "Please enter password",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 characters are allowed",
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: "Maximum 255 characters are allowed",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className={`${styles.errorMessage} mandatory`}>
                                {errors.password.message}
                                </span>
                            )}
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <button className="btn btn-link">
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>
                    </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;