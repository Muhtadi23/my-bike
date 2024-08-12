import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 h-screen bg-emerald-500 p-4">
                <div>
                    <Link to="/" className="btn btn-ghost text-xl font-semibold">Premium Rush</Link>
                </div>
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminProfile">Admin Profile</NavLink></li>
                            <li><NavLink to="/dashboard/manageItem">Manage Item</NavLink></li>
                            <li><NavLink to="/dashboard/addItem">Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>
                            <li><NavLink to="/dashboard/adminHistory"> Admin History</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/user">User Profile</NavLink></li>
                                <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li><NavLink to="/dashboard/history">History</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to="/">What</NavLink></li>
                    <li><NavLink to="/dashboard/history">History</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;