import "./longin.css"
import { useForm } from 'react-hook-form'
import { AuthContext } from "../../context/authcontex.jsx";
import { useContext } from 'react';
import Button from '../../components/button/button.jsx';


export default function Login() {
  const { register, handleSubmit } = useForm();
 const {signIn}= useContext(AuthContext)

  async function handleSignIn(data) {
  await signIn(data)
  }

  return (
    <div className="logo-login">
     
        <h1>logo</h1>

      <div className="space-login">

     
        <form className="" onSubmit={handleSubmit(handleSignIn)}>
        <h2>FAZER LOGIN</h2>
          <input  type="hidden" name="remember" defaultValue="true" />
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
          <div>
            <Button link={`/private`} name={"Longin"}/>
          </div>
        </form>
      </div>
    </div>
  )
}