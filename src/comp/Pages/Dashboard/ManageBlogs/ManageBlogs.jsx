import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useBlog from "../../../../hooks/useBlog";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageBlogs = () => {

    const [blogs, refetch] = useBlog()
    const axiosSecure = useAxiosSecure()

    // const handleDelete = _id => {
    //     console.log(_id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5002/blog/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Blog has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    const handleDelete = _id => {
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
                const res = await axiosSecure.delete(`/blog/${_id}`)
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
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.url} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.title}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <Link to={`/dashboard/updateBlog/${item._id}`} className="btn btn-ghost btn-lg"><FaRegEdit />
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><MdDeleteOutline />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageBlogs;