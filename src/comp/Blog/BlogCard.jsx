/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

    const { title, url, date, content, _id } = blog;

    return (

        // <div>
        //     <Link to={`/blogDetails/${_id}`} >
        //         <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        //             <img
        //                 alt=""
        //                 src={url}
        //                 className="absolute inset-0 h-full w-full object-cover"
        //             />

        //             <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        //                 <div className="p-4 sm:p-6">
        //                     <time className="block text-xs text-white/90"> {date} </time>

        //                     <a href="#">
        //                         <h3 className="mt-0.5 text-lg text-white">{title}</h3>
        //                     </a>

        //                     <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        //                         {content.slice(0, 200)}
        //                     </p>
        //                 </div>
        //             </div>
        //         </article>
        //     </Link>
        // </div >

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

                            <div>
                                <h3 className="mt-0.5 text-lg text-white">{title}</h3>
                            </div>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                {content.slice(0, 200)}
                            </p>
                        </div>
                    </div>
                </article>
            </Link>
        </div>

    );
};

export default BlogCard;