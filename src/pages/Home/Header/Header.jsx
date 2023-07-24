import { Link, NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import logo from '../../../assets/images/others/logo.png'

const Header = () => {
    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink></li>
        <li><NavLink to='/colleges' className={({ isActive }) => (isActive ? "active" : "default")}>Colleges</NavLink></li>
        <li><NavLink to='/admission' className={({ isActive }) => (isActive ? "active" : "default")}>Admission</NavLink></li>
        <li><NavLink to='/myColleges' className={({ isActive }) => (isActive ? "active" : "default")}>My Colleges</NavLink></li>
    </>

    return (
        <div className="px-4 md:px-24 lg:px-8 shadow-md">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] font-semibold p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Avatar />
                </div>
            </div>
        </div>
    );
};

export default Header;