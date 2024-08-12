import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5002/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return [products]
};

export default useProduct;