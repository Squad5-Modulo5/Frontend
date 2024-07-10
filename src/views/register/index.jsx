
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import blogFetch from "../../axios/config";
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg";
import Message from "../../components/message/Message";

function Regiteruser() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");


  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");
 

    try {
      const response = await blogFetch.post("user/register", values);
      console.log("Response: ", response);
     alert(response.data.message) 
    
    } catch (err) {
      if (err instanceof AxiosError) {
        let errResponse = JSON.parse(err.response.request.responseText);


      if (errResponse.errors && errResponse.errors.length > 0) {
   
        errResponse.errors.forEach(error => {
   
        let mensagemDeErro = error.msg;
        // @ts-ignore
        setError( <Message value2={mensagemDeErro}/>) ;
       
       ;})}
     } else if (err instanceof Error) {
          setError(err.message);
      }
       console.log("Error: ", err);
     
    }
  };
  return (
    <div className="logo-login">
      <img id="ecoelekt-logo-login" src={ecoelektLogo} alt="ecoelekt-logo" />
      <div className="space-login">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2>REGISTRAR-SE</h2>
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
              <label htmlFor="name" className="">
                NOME
              </label>
              <input
                  {...register('name')}
                  id="name"
                  name="name"
                  type="text"
                  required
                   placeholder="usuario123"
                  className=""  
              />
            </div>
          <div className="">
            <label htmlFor="email-address" className="">
              EMAIL
            </label>
            <input
              {...register("email")}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=""
              placeholder="usuario@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              SENHA
            </label>
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className=""
              placeholder="Password"
            />
          </div>
         
          <div>
            <button>Registrar</button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Regiteruser;