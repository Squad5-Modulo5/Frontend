import "./longin.css"
import { AxiosError } from "axios";
import { useState } from "react";
import blogFetch from "../../axios/config";
import { useForm } from "react-hook-form";
import Button from "../../components/button/button";
import React from "react";

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
    <>
      <div className="background34">
        <div className="logo-login">
          <div id="logo1">
            <h1 className="logo">Eco</h1>
            <h1 className="logo-continuation">elekt</h1>
          </div>
          <div className="space-login">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <h2>FAZER LOGIN</h2>
              <input type="hidden" name="remember" defaultValue="true" className="input" />
              <div className="">
                <label htmlFor="email-address" className="label">
                  EMAIL
                </label>
                <input
                  {...register('email')}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input"
                  placeholder="Email address"
                  
                />
              </div>
              <label htmlFor="password" className="label">
                  SENHA
              </label>

              <div>
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input"
                  placeholder="Password"
                /> 
              </div>
              {error && <p className="error">{error}</p>}
              <div className="button">
                <Button link={`/private`} name={"Login"} className={'button'} />
              </div>
            </form>
          </div>
        </div>
      </div> 
      
    </>
    );
  }



export default Login;
