
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const Private = () => {
    const auth = useAuthUser()

    return(
        <div>
            Hello {auth.user}
        </div>
    )
}
export default  Private 
    