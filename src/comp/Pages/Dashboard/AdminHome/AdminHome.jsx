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
                {/* <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='text-3xl'></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">$</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl'></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value"></div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>


                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaBook className='text-3xl'></FaBook>
                        </div>
                        <div className="stat-title">Menu Items</div>
                        <div className="stat-value"></div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value"></div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div> */}
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