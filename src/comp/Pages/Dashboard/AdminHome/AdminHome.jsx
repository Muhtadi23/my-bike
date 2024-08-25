// import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="p-4">
            <div>
                <h2 className="text-3xl font-semibold">
                    <span>Hi, Welcome </span>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h2>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
                    <dl className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium ">Total Sales</dt>

                            <dd className="text-4xl font-extrabold md:text-5xl">$ {stats.revenue}</dd>
                        </div>

                        <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium ">Total Products</dt>

                            <dd className="text-4xl font-extrabold  md:text-5xl">{stats.productItems} </dd>
                        </div>

                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium ">Total Orders</dt>

                            <dd className="text-4xl font-extrabold  md:text-5xl">{stats.orders}</dd>
                        </div>

                        <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium ">Users</dt>

                            <dd className="text-4xl font-extrabold  md:text-5xl">{stats.users}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;