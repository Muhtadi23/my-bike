// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
    const axiosPublic = useAxiosPublic()
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5002/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, [])
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            return res.data
        }
    })

    return [products,  refetch]
};

export default useProduct;