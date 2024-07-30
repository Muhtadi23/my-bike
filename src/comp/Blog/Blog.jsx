import useBlog from "../../hooks/useBlog";
import BlogCard from "./BlogCard";


const Blog = () => {
    const [blogs] = useBlog()
    // console.log(blogs)
    return (
        <div className="p-4 grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
            {/* {
                blogs.map(blog=>console.log(blog))
            } */}
            {
                blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
            }


        </div>
    );
};

export default Blog;