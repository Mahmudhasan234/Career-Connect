import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto lg:px-28 my-2 lg:my-5'>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 gap-7 p-2 shadow bg-base-100  rounded">
                            <Link to='statistics'>Statistics</Link>
                            <Link to='appliedjobs'>Applied Jobs</Link>
                            <Link to='blogs'>Blogs</Link>
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-lg lg:text-xl font-bold">Career <span className='text-green-500'>Connect</span></Link>
                </div>
                <nav className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-10 gap-10">
                        <NavLink className={({isActive})=> (isActive? 'text-green-500': '')} to='statistics'>Statistics</NavLink>
                        <NavLink className={({isActive})=> (isActive? 'text-green-500': '')} to='appliedjobs'>Applied Jobs</NavLink>
                        <NavLink className={({isActive})=> (isActive? 'text-green-500': '')} to='blogs'>Blogs</NavLink>
                    </ul>
                </nav>
                <div className="navbar-end">
                    <a className="btn">Start Applying</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;

/**
 *  <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedjobs'>Applied Jobs</Link>
            <Link to='/blogs'>Blogs</Link>
 * 
 * **/ 