import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { getToken, getUserType,removeUserSession } from "../Utils/common";

function Navbar(props){
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                    Ghargutti
                </a>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                    <li className="nav-item">   
                        <Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Menu</Link>
                    </li>
                    { getToken() && getUserType()=='cook' ? <li className="nav-item">
                     <Link to="/menu" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Dashboard</Link>
                    </li>: <li/>}
                    <li className="nav-item">
                     <Link to="/dashboard" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Menu</Link>
                    </li>
                    { getToken() && getUserType()=='customer' ? <li className="nav-item">
                     <Link to="/cart" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Cart</Link>
                    </li>: <li/>}
                    { !getToken() ? <li className="nav-item">
                            <Link to="/login" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Login</Link>
                    </li> :
                    <li className="nav-item">
                          
                            <button  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={()=>{removeUserSession()}}>Logout</button>
                    </li>}
                </ul>
                </div>
            </div>
        </nav>
    );
    }

export default Navbar;