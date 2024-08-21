import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import { FaShop } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TbTimelineEventMinus } from "react-icons/tb";
import { PiBicycle } from "react-icons/pi";
import useAuth from "../../hooks/useAuth";
// import useAdmin from "../../hooks/useAdmin";

const Nav = () => {

    const { user, logOut } = useAuth()
    // const [isAdmin] = useAdmin()
    const [cart] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged Out",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const navOptions = <>
        <li> <Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/shop"><FaShop /> Shop</Link></li>
        <li><Link to='/social'><TbTimelineEventMinus /> Event</Link></li>
    </>

    return (
        <div className="navbar bg-base-100" style={{ zIndex: 2 }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ zIndex: 1000 }}>
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl"><PiBicycle /> Premium Rush</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <div className="navbar bg-base-100">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow" style={{ zIndex: 1000 }}>
                                    <div className="card-body">
                                        <span className="font-bold text-lg">{cart.length} Items</span>
                                        <div className="card-actions">
                                            {/* {
                                                user && isAdmin && <><Link to="/dashboard/adminHome" className="btn btn-primary btn-block">View Dashboard </Link></>
                                            }
                                            {
                                                user && !isAdmin && <><Link to="/dashboard/cart" className="btn btn-primary btn-block">View cart </Link></>
                                            } */}
                                            <Link to="/dashboard/cart" className="btn btn-primary btn-block">View cart </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ zIndex: 1000 }}>
                                    <li className="text-center font-semibold text-lg">

                                        {user?.displayName}

                                    </li>
                                    {
                                        user ? <li onClick={handleLogOut}><Link to="/">Logout</Link></li>
                                            :
                                            <li><Link to="/login">Login</Link></li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
