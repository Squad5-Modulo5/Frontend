
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useForm } from 'react-hook-form';
import blogFetch from '../../../axios/config';



const ProductForm = ({ userId }) => {
 
  const { register, handleSubmit, formState: { errors } } = useForm();

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
    } catch (error) {
      alert('Erro ao criar o produto. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="product_name">Nome do Produto:</label>
    <input 
      type="text" 
      id="product_name" 
      {...register('product_name', { required: true })} 
    />
    {errors.product_name && <p>Nome do produto é obrigatório</p>}

    <label htmlFor="category">Categoria:</label>
    <input 
      type="text" 
      id="category" 
      {...register('category', { required: true })} 
    />
    {errors.category && <p>Categoria é obrigatória</p>}

    <button type="submit">Criar Produto</button>
  </form>
);
};

export default ProductForm;
