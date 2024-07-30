import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

    const blog = useLoaderData()
    console.log(blog)

    const handleUpdateBlog = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const url = form.photo.value;
        const date = form.date.value;
        const content = form.content.value;
        const updatedBlog = { title, url, date, content }
        console.log(updatedBlog)

        // send data to the server
        // post method on Client Side
        fetch(`http://localhost:5002/blog/${blog._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Blog Updated Successfully",
                        showConfirmButton: false,
                        timer: 1200
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-5xl">Update Blog</h2>
            <form onSubmit={handleUpdateBlog} className="bg-slate-100 card-body w-3/4 mx-auto">
                <div className="form-control">
                    <input type="text" defaultValue={blog.url} name="photo" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" defaultValue={blog.title} name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" defaultValue={blog.date} name="date" placeholder="Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input className="textarea textarea-bordered " type="text" defaultValue={blog.content} name="content" placeholder="Blog" required></input>
                </div>

                <input className="btn bg-[#eb4034] text-white border-none" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateBlog;