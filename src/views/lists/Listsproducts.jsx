import "./listproducts.css"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import blogFetch from "../../axios/config";
import React from "react";


function ListProducts() {
  const { user} = useContext(UserContext);
  const [Products, setProducts] = useState([]);
  const profile = user; 
  const authHeader = useAuthHeader();
  const headers = {
    'Authorization': authHeader
  };
  const getProducts = async () => {
    try {
      const responselistProduct = await blogFetch({
        method: 'get',
        url: `products/showproducts/${profile.id}`,
        headers
      });
       console.log(responselistProduct)
      setProducts(responselistProduct.data.Products);
  
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error; 
    }
  
  };
  useEffect(() => {
    getProducts();
}, []);
  return (
    <div className={"card-product"}>
    { Products.length === 0 ? <h1>Carregando ...</h1> : (
        Products.map((object) => (
            <div className="post" key={object.id}>
                <div className={"entyty"}>
                <h2>{object. product_name}</h2>
                <h2>{object.category}</h2>
                </div>
              
              
            </div>)))}

  </div> 

  )
  
  
}
  export default ListProducts
  