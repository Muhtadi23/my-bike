/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";

const ProductCard = ({ item }) => {
    const { image, title, price, _id } = item;

    const [, refetch] = useCarts()

    const { user } = useAuth()
    const navigate = useNavigate()
    // use location to set state
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                productId: _id,
                email: user.email,
                title,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${title} Added to the Cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div href="#" className="group relative block bg-black">
                <img
                    alt=""
                    src={image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">

                    <p className="font-semibold text-white sm:text-2xl">{title}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <button onClick={handleAddToCart} className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span>${price}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;