import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    //**********  another way of UseNavigate **************
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    // console.log("state", location.state)
    // *****************************************

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome To Premium Rush!",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true })
                // navigate('/')
            })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Sign in to Premium Rush</h1>
                    </div>
                    {/* <button className="btn w-full"><FcGoogle /> Sign in with Google</button> */}
                    <SocialLogin></SocialLogin>
                    <div className="divider"></div>
                    <div className="card w-full max-w-sm shrink-0">

                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className="text-center mt-2">
                                <p>Don't have an account? <span className="font-bold"> <Link to="/signup">Sign Up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;