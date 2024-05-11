/* eslint-disable react/prop-types */
import { createContext} from "react";
import blogFetch from "../axios/config";

export const AuthContext = createContext()

export  function AuthProvider({ children }) {

    async function signIn({ email, password}) {
        try {
            const response = await blogFetch(
                    {method: 'post',
                    url: "/user/login",
                    responseType: 'json',
                    data: { email, password }});
       console.log(response)
            //const { token, user } = response.data;
      
          /*  setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 1,
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser(user);
            Router.push('/dashboard');*/
        } catch (error) {
            console.log(error);
        }
      }
      
    return (
        <AuthContext.Provider value={{ signIn }}>
          {children}
        </AuthContext.Provider>
      )
    }