import axios from "axios";
//import { parseCookies } from "nookies";

//export function getAPIClient(ctx) {
 // const { 'nextauth.token'
  const blogFetch = axios.create({
    
    baseURL: 'https://ecoelektbackend.onrender.com',
    
    headers:{
        "Content-type":"application/json"
        
    }
});
export default blogFetch
