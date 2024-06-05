import "./longin.css"
import { AxiosError } from "axios";
import { useState } from "react";
import blogFetch from "../../axios/config";
import { useForm } from "react-hook-form";
import React from "react";
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg";


function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");

    try {
      const response = await blogFetch("/login", values);
      console.log("Response: ", response);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      } else if (err instanceof Error) {
        setError(err.message);
      }
      console.log("Error: ", err);
    }
  };

  return (
      <div className="logo-login">
        <img id="ecoelekt-logo-login" src={ecoelektLogo} alt="ecoelekt-logo"/>
        <div className="space-login">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h2>FAZER LOGIN</h2>
            <input type="hidden" name="remember" defaultValue="true"/>
            <div className="">
              <label htmlFor="email-address" className="">
                EMAIL
              </label>
              <input
                  {...register('email')}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=""
                  placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="">
                SENHA
              </label>
              <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=""
                  placeholder="Password"
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div>
              <button>LONGIN</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;