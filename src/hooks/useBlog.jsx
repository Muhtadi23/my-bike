// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlog = () => {
    const axiosPublic = useAxiosPublic()
    // const [blogs, setBlogs] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5002/blog')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBlogs(data)
    //         })
    // }, [])
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blog')
            return res.data
        }
    })


    return [blogs, refetch]
};

export default useBlog;