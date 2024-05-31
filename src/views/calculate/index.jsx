
import axios, { AxiosError } from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
import Button from "../../components/button/button";
// eslint-disable-next-line no-unused-vars
import React from "react";
import blogFetch from "../../axios/config";

function CalculateProduct() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");

    try {
      const response = await blogFetch.post("/consumpition/createconsumpition", 
      
      
      values);
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
      <h1>logo</h1>
      <div className="space-login">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2>CALCULAR Kwh/h</h2>
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
            <label htmlFor="Measurement" className="">
           MEDIDADAS
            </label>
            <input
              {...register('Measurement')}
              id="Measurement"
              name="Measurement"
              type="string"
              step="0.01" 
              min="0" 
              required
              className=""
              placeholder="Number"
            />
          </div>
          <div>
            <label htmlFor="power" className="">
              POTẼNCIA
            </label>
            <input
              {...register('power')}
              id="power"
              name="power"
              type="number"
              step="0.01" 
              min="0" 
              required
              className=""
              placeholder="Number"
            />
          </div>
          <div>
            <label htmlFor="duration" className="">
              DURAÇÃO
            </label>
            <input
              {...register('duration')}
              id="duration"
              name="duration"
              type="number"
              min="0" 
              className=""
              placeholder="Number"
            />
          </div>
          <div>
            <label htmlFor="days" className="">
              DIAS
            </label>
            <input
              {...register('days')}
              id="days"
              name="days"
              type="number"
              min="0" 
              className=""
              placeholder="Number"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div>
            <Button name={"Resultado"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalculateProduct;


















