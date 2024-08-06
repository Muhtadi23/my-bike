// import { useLoaderData } from "react-router-dom";

// const EditProducts = () => {

//     const products = useLoaderData()
//     console.log(products)

//     const handleUpdateProduct = event => {
//         console.log("what?")
//     }

//     return (
//         <div>
//             <h2 className="text-center text-5xl">Update Blog</h2>
//             <form className="bg-slate-100 card-body w-3/4 mx-auto">
//                 <div className="form-control">
//                     <input type="text" defaultValue={products.image} name="photo" placeholder="Image URL" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <input type="text" defaultValue={products.title} name="title" placeholder="Title" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <input type="text" defaultValue={products.price} name="price" placeholder="Price" className="input input-bordered" required />
//                 </div>
//                 {/* <div className="form-control">
//                     <input className="textarea textarea-bordered " type="text" defaultValue={ } name="content" placeholder="Blog" required></input>
//                 </div> */}

//                 <input className="btn bg-[#eb4034] text-white border-none" type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// };

// export default EditProducts;