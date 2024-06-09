
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import Home from "../home/home.jsx";

const Private = () => {
    const auth = useAuthUser()

    return(
        <div>
            Hello {auth.user}
            <Home/>
        </div>
    )
}
export default  Private 
    