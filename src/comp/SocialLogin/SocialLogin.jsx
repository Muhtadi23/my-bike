import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
                
            })
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <button onClick={handleGoogleSignIn} className="btn w-full"><FcGoogle /> Continue with Google</button>
            <button className="btn w-full" disabled><BsFacebook /> Continue with Facebook</button>
            <button className="btn w-full" disabled><FaSquareXTwitter /> Continue with X</button>
        </div>
    );
};

export default SocialLogin;