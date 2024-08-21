import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddBlog = () => {
    // const axiosPublic = useAxiosPublic()

    const handleAddBlog = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const url = form.photo.value;
        const date = form.date.value;
        const content = form.content.value;
        const newBlog = { title, url, date, content }
        // console.log(newBlog)

        // send data to the server
        // post method on Client Side
        fetch('http://localhost:5002/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Blog Added Successfully",
                        showConfirmButton: false,
                        timer: 1200
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-5xl">Add Blog</h2>
            <form onSubmit={handleAddBlog} className="card-body w-3/4 mx-auto">
                <div className="form-control">
                    <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input className="textarea textarea-bordered h-24" type="text" name="content" placeholder="Blog" required></input>
                </div>

                <input className="btn bg-[#eb4034] text-white border-none" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddBlog;
