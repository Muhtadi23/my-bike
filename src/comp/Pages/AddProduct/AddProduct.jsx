import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const price = parseFloat(form.price.value);
        const image = form.image.value;
        const newProduct = { title, image, price }

        fetch('http://localhost:5002/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 1200
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-5xl p-4">Add Product Here</h2>
            <form onSubmit={handleAddProduct} className=" card-body w-3/4 mx-auto">
                <div className="form-control">
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                    <input className="textarea textarea-bordered " type="text" name="description" placeholder="Description" required></input>
                </div> */}

                <input className="btn bg-[#eb4034] text-white border-none" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;