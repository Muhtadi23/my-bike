import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5002'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    // request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })
    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // 401 or 403 logout the user and move the user to the login page
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    }
    )
    return axiosSecure;
};

export default useAxiosSecure;

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5002'
// });

// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const { logOut } = useAuth();

//     // Request interceptor to add authorization header
//     axiosSecure.interceptors.request.use(
//         function (config) {
//             const token = localStorage.getItem('access-token');
//             if (token) {
//                 config.headers.authorization = `${token}`;
//             }
//             return config;
//         },
//         function (error) {
//             return Promise.reject(error);
//         }
//     );

//     // Response interceptor to handle 401 and 403 status codes
//     axiosSecure.interceptors.response.use(
//         function (response) {
//             return response;
//         },
//         async (error) => {
//             if (error.response) {
//                 const status = error.response.status;
//                 // 401 or 403 logout the user and redirect to the login page
//                 if (status === 401 || status === 403) {
//                     await logOut();
//                     navigate('/login');
//                 }
//             } else if (error.request) {
//                 // The request was made but no response was received
//                 console.error('No response received:', error.request);
//             } else {
//                 // Something happened in setting up the request that triggered an error
//                 console.error('Error in setting up request:', error.message);
//             }
//             return Promise.reject(error);
//         }
//     );

//     return axiosSecure;
// };

// export default useAxiosSecure;
