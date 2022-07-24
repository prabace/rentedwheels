import React, {useState} from "react";

import {MenuIcon, XIcon} from '@heroicons/react/outline'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <div className="w-screen h-[80px] drop-shadow-lg absolute z-10 sticky">
            <div className="px-2 flex justify-between items-center w-full h-full">
               
                    <h1 className="font-bold mx-4 text-3xl md:text-4xl xl:text-5xl">RENTED WHEELS.</h1>
                    <ul className="hidden lg:flex items-center">
                        <li>
                          <Link to="/home">Home</Link> 
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/support">Support</Link>
                        </li>
                        <li>
                        <Link to="/garage">Garage</Link>
                        </li>
                    </ul>
                

                <div className="hidden lg:flex pr-4">
                    <button className="bg-transparent hover:bg-indigo-600 hover:text-white px-8 py-3 text-black mr-4 rounded-full">
                        <a href="/signin">Sign In</a>
                    </button>
                    <button className="px-8 py-3 rounded-full">
                    <a href="/signup">Sign Up</a>
                        </button>
                </div>
                <div className="lg:hidden block" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5"/> : <XIcon className="w-5"/>}
                    
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'} >
                        <li className="border-b-2 border-zinc-300 w-full">Home</li>
                        <li className="border-b-2 border-zinc-300 w-full">About</li>
                        <li className="border-b-2 border-zinc-300 w-full">Support</li>
                        <li className="border-b-2 border-zinc-300 w-full">Garage</li>
                        <div className="flex flex-col my-4">
                            <button className="bg-transparent text-indigo-600 px-7 py-3 mb-3 ">
                                <a href="/signin">Sign In</a>
                            </button>
                            <button className="px-7 py-3">Sign Up</button>
                        </div>
                        </ul>
        </div>
    )
}

export default Navbar;