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
        // <div className="overflow-hidden rounded bg-white shadow-md ">

        //     <figure>
        //         <img
        //             src={url}
        //             alt="card image"
        //             className="aspect-video w-full"
        //         />
        //     </figure>

        //     <div className="p-6">
        //         <header className="mb-4 flex gap-4">
        //             <div>
        //                 <h3 className="text-xl font-medium ">
        //                     {title}
        //                 </h3>
        //                 <p className="text-sm">{date}</p>
        //             </div>
        //         </header>
        //         <p>
        //             {content.slice(0, 300)}
        //             <Link to={`/blogDetails/${_id}`} >
        //                 <span className="font-semibold underline"> Read more....</span>
        //             </Link>
        //         </p>
        //     </div>
        // </div>
        <div>
            <Link to={`/blogDetails/${_id}`} >
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src={url}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">
                            <time className="block text-xs text-white/90"> {date} </time>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">{title}</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                {content.slice(0, 200)}
                            </p>
                        </div>
                    </div>
                </article>
            </Link>
        </div >
    );
};

export default BlogCard;