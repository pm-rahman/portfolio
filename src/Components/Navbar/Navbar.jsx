import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/profile.jpg"
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isNavShow, setIsNavShow] = useState(false);
    const scrollStart = () => {
        setSticky(window.scrollY > 105);
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollStart);
    },[])

    const navLink = <>
        <li><NavLink to='/'><Icon className="text-xl" icon="heroicons-outline:home" /><span>Home</span></NavLink></li>
        <li><NavLink to='/my-work'><Icon className="text-xl" icon="fa-regular:chart-bar" /><span>My Works</span></NavLink></li>
    </>
    return (
        <div className={`navbar px-4 md:px-8 lg:px-16 uppercase bg-base-100 border-b ${isSticky && `sticky top-0 z-30 shadow-lg border-b-0 shadow-b  ${theme !== 'light' ? "shadow-black" : "shadow-slate-300"}`} ${theme !== 'light' && 'border-zinc-600'}`}>
            <div className="navbar-start">
                <div onClick={() => setIsNavShow(!isNavShow)} className="relative lg:hidden">
                    <label className="btn pl-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className={`navbar absolute top-11 duration-500 ease-out ${isNavShow ? "left-0" : "-left-72"} menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 border border-zinc-300 rounded-md w-52`}>
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="hidden lg:flex btn btn-ghost h-16 uppercase pl-0 text-xl">
                    <figure className="h-14 border-3 w-14 rounded-full overflow-hidden"><img className="h-full w-auto" src={profile} alt="" /></figure>
                    <h3>Mokhlesur</h3>
                </Link>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu  menu-horizontal">
                        {navLink}
                    </ul>
                </div>
                <label className="swap swap-rotate lg:ml-2">
                    <input onChange={toggleTheme} type="checkbox" defaultChecked={theme === 'forest'} />
                    <svg
                        className="swap-on h-9 w-9 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                        className="swap-off h-9 w-9 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;