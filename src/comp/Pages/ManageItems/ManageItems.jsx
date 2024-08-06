import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useProduct from "../../../hooks/useProduct";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [products] = useProduct()
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
                            <td><button className="btn btn-ghost btn-lg"><FaRegEdit /></button></td>
                            <td>
                                <Link to="/editproducts" className="btn btn-ghost btn-lg"><MdDeleteOutline />
                                </Link>
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageItems;