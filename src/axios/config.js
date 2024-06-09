import axios from "axios";
//import { parseCookies } from "nookies";

//export function getAPIClient(ctx) {
 // const { 'nextauth.token': token } = parseCookies(ctx)

  const blogFetch = axios.create({
    baseURL: 'http://localhost:4979',
    headers:{
        "Content-type":"application/json"
    }
});
export default blogFetch