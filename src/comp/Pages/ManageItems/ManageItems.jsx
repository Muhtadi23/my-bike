import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useProduct from "../../../hooks/useProduct";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [products] = useProduct()

    const handledeleteItem = (item) => {
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
                fetch(`http://localhost:5002/products/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="overflow-x-auto p-2">
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