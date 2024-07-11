import  { useContext} from 'react';
import ProductForm from '../../components/electricalProduct/formProduct';
import Header from '../../components/header/header';
import { UserContext } from '../../context/user';
import { Link } from 'react-router-dom';
const Private = () => {
  const { user} = useContext(UserContext);


  // Assuming profile should come from user object
  const profile = user; // or user.profile or however your user data is structured

  return (
    <>
      {profile && (
        <div>
          <Header link1={`#`} link2={`#`} home={profile.name} buttonLink={`/`} name={"logout"} />
          <ProductForm userId={profile.id} />
          <button><Link to={`/listproduct`}>seus elotronicos</Link></button>
        </div>
      )}
    </>
  );
};

export default Private;
