import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProduct from "../../../hooks/useProduct";

const ManageItems = () => {
    
    const axiosSecure = useAxiosSecure()
    const [products, refetch] = useProduct()

    const handledeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div className="overflow-x-auto p-2">
            <h1 className="text-center text-5xl p-4">Manage Items</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.price}

                            </td>
                            <td>
                                <button className="btn btn-ghost btn-lg"><FaRegEdit />
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handledeleteItem(item)} className="btn btn-ghost btn-lg"><MdDeleteOutline />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageItems;