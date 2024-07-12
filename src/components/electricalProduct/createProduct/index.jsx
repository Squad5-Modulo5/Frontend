


import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import blogFetch from '../../../axios/config';



const createProduct = async ({id_User, productData}) => {
  const authHeader = useAuthHeader();
  const headers = {
    'Authorization': authHeader
  };

  try {
    const responseProduct = await blogFetch({
      method: 'post',
      url: `/creatproducts/${id_User}`,
      data: productData, 
      headers
    });

    console.log('Produto criado:', responseProduct.data);

  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error; 
  }
};

export default createProduct;
