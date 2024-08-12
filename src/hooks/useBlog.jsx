import { useEffect, useState } from "react";

const useBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5002/blog')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return [blogs]
};

export default useBlog;