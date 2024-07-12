
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useForm } from 'react-hook-form';
import blogFetch from '../../../axios/config';
import ecoelektLogo from "../../../assets/logo/ecoelekt.logo.svg";
import { useState } from 'react';
import CalculateProduct from '../../../views/calculate';


const ProductForm = ({ userId }) => {
 
  const { register, handleSubmit} = useForm();
  
  const [product, setProduct] = useState(null);
  const authHeader = useAuthHeader();
  const headers = {
    'Authorization': authHeader
  };

  const onSubmit = async (values) => {
  console.log("Values: ", values);
 
    try {
        const responseProduct = await blogFetch.post(`products/creatproducts/${userId}`, values,{
            headers
        });
    
          console.log(responseProduct)
          setProduct(responseProduct.data.newProduct);
          alert(responseProduct.data.newProduct)
    } catch (error) {
      alert('Erro ao criar o produto. Por favor, tente novamente.');
    }
  };

  return (
    <div className="logo-calculete">
       <img id="ecoelekt-logo-calculate" src={ecoelektLogo} alt="ecoelekt-logo"/>
        <div className="space-calculate">
    <form onSubmit={handleSubmit(onSubmit)}>
    <h2>Eletro nome</h2>
    <label htmlFor="product_name">Nome do Produto:</label>
    <input 
      type="text" 
      id="product_name" 
      {...register('product_name', { required: true })} 
    />
  

    <label htmlFor="category">Categoria:</label>
    <input 
      type="text" 
      id="category" 
      {...register('category', { required: true })} 
    />
  

  <button type="submit">Criar Produto</button>
  </form>
   </div>
   <div>
  
      {product && (
        <div>
        
          <CalculateProduct idproduct={product.id}/>
        </div>
      )}
    </div>)
    </div>
);
};

export default ProductForm;
