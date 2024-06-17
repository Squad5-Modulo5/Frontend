import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import blogFetch from '../../axios/config';
import { useEffect, useState } from 'react';
import ProductForm from '../../components/electricalProduct/formProduct';
import Header from '../../components/header/header';

const Pivate= () => {
 const [profile, setProfile] = useState(null);
 const authHeader = useAuthHeader();
 const headers = {
   'Authorization': authHeader
 }

 const getUser= async () => {
     try {

         const responseUser = await blogFetch({
             method: 'get',
             url: "/user/profile",
             responseType: 'json',
             headers

         });
         console.log(responseUser.data.profile)
         setProfile(responseUser.data.profile);
     } catch (error) {
         console.log(error);
     }
 }

 useEffect(() => {
     getUser();
 }, []);
 return (
    <div>
  
      {profile && (
        <div>
          <Header link1={`#`} link2={`#`} home={profile.name}/>
          <ProductForm userId={profile.id}/>
        </div>
      )}
    </div>)
}
export default Pivate