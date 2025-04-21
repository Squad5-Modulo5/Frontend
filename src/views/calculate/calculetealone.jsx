import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import blogFetch from "../../axios/config";
import {Link} from "react-router-dom";
import ecoelektLogo from "../../assets/logo/ecoelekt.logo.svg";

function Calculatealone() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");
    setResult(null);

    try {
      const response = await blogFetch.post(`/consumpition/noreletion`, values);
      console.log("Response: ", response);
      setResult(response?.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message || "An error occurred");
      } else if (err instanceof Error) {
        setError(err.message);
      }
      console.log("Error: ", err);
    }
  };

  return (
      <div className="logo-calculete mb-5 w-100 ">
        <img id="ecoelekt-logo-calculate" src={ecoelektLogo} alt="ecoelekt-logo"/>
        <div className="space-calculate w-100">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h2>CALCULAR Kwh/h</h2>
            <input type="hidden" name="remember" defaultValue="true"/>
            <div>
              <label htmlFor="Measurement" className="">
                MEDIDAS
              </label>
              <input
                  {...register('Measurement')}
                  id="Measurement"
                  name="Measurement"
                  type="text"
                  step="0.01"
                  min="0"
                  required
                  className=""
                 
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
                  step="0.01"
                  min="0"
                  required
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
                  step="0.01"
                  min="0"
                  required
                  className=""
                  placeholder="Number"
              />
            </div>
            {error && <p className="error">{error}</p>}

            <div>
              <button type="submit">RESULTADO</button>
            </div>
            {result && (
                <div className="result w-100">
                  <ul>
                    <li>MEDIDAS: {result.Measurement}</li>
                    <li>POTÊNCIA: {result.power}</li>
                    <li>DURAÇÃO: {result.duration}</li>
                    <li>DIAS: {result.days}</li>
                    <li>RESULTADO: {result.resultConsumption} KW/h</li>
                  </ul>
                  <button><Link to={`/`}>HOME</Link></button>
                </div>
            )}

          </form>
        </div>
      </div>
  );
}

export default Calculatealone;
