// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    // const { title, content } = useLoaderData()
    const blog = useLoaderData()
    return (
        <div className="max-w-7xl mx-auto p-4">
            {/* <h2 className="text-3xl text-red-600 font-bold mb-4">Styling Requires</h2> */}
            <img className="w-full rounded-lg shadow-black shadow-lg" src={blog.url} alt="" />
            <h2 className="text-4xl font-semibold mt-4">{blog.title}</h2>
            <h5 className="mt-2 font-semibold">{blog.date}</h5>
            <p className="mt-2">{blog.content}</p>

        </div>
    );
};

export default BlogDetails;