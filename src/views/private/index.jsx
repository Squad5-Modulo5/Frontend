import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import blogFetch from '../../axios/config';
import { useEffect, useState } from 'react';
import ProductForm from '../../components/electricalProduct/formProduct';

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
      <h1>User Profile</h1>
      {profile && (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <ProductForm userId={profile.id}/>
        </div>
      )}
    </div>)
}
export default Pivate