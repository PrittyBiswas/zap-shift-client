import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate=useNavigate();


    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location.state||'/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='text-center'>
            <p className="text-center my-2">OR</p>
            <button
                onClick={handleGoogleSignIn}
                className="btn bg-gray-300 w-full text-black">
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;
