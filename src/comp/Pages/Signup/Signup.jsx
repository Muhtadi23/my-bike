// {...register("example")} to get value from form
import { Link, useNavigate } from "react-router-dom";
// export from hook form
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Signup = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    // export from hook form    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // create user will take email n password as parameters just like we take email n pass from auth-provider
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL, data.email)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign Up Successful",
                                        text: "Welcome To Premium Rush!",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))

            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Welcome to Premium Rush</h1>
                    </div>
                    {/* <button className="btn w-full"><FcGoogle /> Sign up with Google</button> */}
                    <SocialLogin></SocialLogin>
                    <div className="divider"></div>
                    <div className="card w-full max-w-sm shrink-0">

                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                })} className="input input-bordered" />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-500 text-xs">Password is required</p>
                                )}

                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <div className="text-center mt-2">
                                <p>Already have an account? <span className="font-bold"> <Link to="/login">Sign In</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;