/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {

    const { title, url, date, content, _id } = blog;

    // Delete Button Operation
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
    // *************************************
    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md ">

            <figure>
                <img
                    src={url}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>

            <div className="p-6">
                <header className="mb-4 flex gap-4">
                    <div>
                        <h3 className="text-xl font-medium text-slate-700">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-400">{date}</p>
                    </div>
                </header>
                <p>
                    {content}
                    <Link to={`/blogDetails/${_id}`} >
                        <span className="font-semibold underline"> Read more....</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default BlogCard;