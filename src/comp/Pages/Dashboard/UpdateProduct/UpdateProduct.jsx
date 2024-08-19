import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const UpdateProduct = () => {

    const products = useLoaderData()
    const axiosSecure = useAxiosSecure()

    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const price = parseFloat(form.price.value);
        const image = form.image.value;
        const updateProduct = { title, image, price }
        // console.log(updateProduct)

        axiosSecure.put(`/products/${products._id}`, updateProduct)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product Updated Successfully",
                        showConfirmButton: false,
                        timer: 1200
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-5xl p-4">Add Product Here</h2>
            <form onSubmit={handleUpdateProduct} className=" card-body w-3/4 mx-auto">
                <div className="form-control">
                    <input type="text" name="image"
                        defaultValue={products.image}
                        placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="number" name="price"
                        defaultValue={products.price}
                        placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" name="title"
                        defaultValue={products.title}
                        placeholder="Title" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                <input className="textarea textarea-bordered " type="text" name="description" placeholder="Description" required></input>
            </div> */}

                <input className="btn bg-[#eb4034] text-white border-none" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;