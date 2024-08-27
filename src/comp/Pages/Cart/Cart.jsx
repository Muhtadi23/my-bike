import { MdDeleteOutline } from "react-icons/md";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const axiosSecure = useAxiosSecure()

    const handledeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

    // const handleQuantityChange = (productId, newQuantity) => {
    //     axiosSecure.patch(`/carts/${cart._id}`, { quantity: newQuantity })
    //         .then(res => {
    //             if (res.data.modifiedCount > 0) {
    //                 // Optionally update the cart state or item quantity directly
    //                 updateCartItem(productId, newQuantity);
    //                 refetch(); // Refetch the cart data to sync the UI
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error updating quantity:', error);
    //             // Optionally, you could update the state to show an error message or highlight the error
    //         });
    // }

    return (
        <div>
            <h1 className="text-center text-5xl p-4">Cart</h1>
            <div className="flex justify-around font-medium text-3xl">
                <h2>Total Order: {cart.length}</h2>
                <h2>Total Price: {totalPrice}</h2>
                {cart.length ?
                    <Link to="/dashboard/payment"><button className="btn bg-[#eb4034] text-white">Pay</button></Link>
                    :
                    <button disabled className="btn bg-[#eb4034] text-white">Pay</button>
                }

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>$ Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    <td>
                                        ${item.price * item.quantity}
                                    </td>
                                    <th>
                                        <button onClick={() => handledeleteItem(item._id)} className="btn btn-ghost btn-lg"><MdDeleteOutline />
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Cart;