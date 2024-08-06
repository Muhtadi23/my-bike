import useProduct from "../../../hooks/useProduct";
import ProductCard from "./ProductCard";

const ShopLanding = () => {
    const [products] = useProduct()
    // console.log(products)
    return (
        <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {
                products.map(item => <ProductCard key={item._id}
                    item={item} ></ProductCard>)
            }
        </div>
    );
};

export default ShopLanding;