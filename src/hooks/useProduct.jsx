// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
    const axiosPublic = useAxiosPublic()
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch('https://my-bike-server.vercel.app/products')
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