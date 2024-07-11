import { useState, createContext, useEffect} from "react";
import blogFetch from "../axios/config";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

 // @ts-ignore
 export const UserContext = createContext();

export const UserProvider = ({children})=>{
  const [user, setUser] = useState(null);
  const authHeader = useAuthHeader();
  const headers = {
    'Authorization': authHeader
  }
  const getUser2 = async () => {
    try {

        const responseUser = await blogFetch({
            method: 'get',
            url: "/user/profile",
            responseType: 'json',
            headers

        });
        console.log(responseUser.data.profile)
        setUser(responseUser.data.profile);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getUser2();
}, []);
    
  return( <UserContext.Provider value={{user, getUser2}}>{children}</UserContext.Provider>
  );
}
