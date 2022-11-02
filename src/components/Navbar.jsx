import React, { useState } from "react";

import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link } from 'react-router-dom'

import profile from '../assets/profile.svg'

const Navbar = () => {
    const [user,setUser]= useState(window.localStorage.getItem('signedIn')||false)
    const [userEmail,setUserEmail]= useState(window.localStorage.getItem('email')||'')
    window.onstorage=()=>{
        setUser(window.localStorage.getItem('signedIn'))
        setUserEmail(window.localStorage.getItem('email'))
    }
 
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [open, setOpen] = useState(false)
    const handleAvatar = () => setOpen(!open)
    const handleLogOut=()=>{
        window.localStorage.removeItem('signedIn')
        window.localStorage.removeItem('email')
        setUser(false)
    }

    return (
        <div className="w-screen h-[80px] drop-shadow-lg relative z-10 ">
            <div className="px-2 flex justify-between items-center w-full h-full">

                <h1 className="font-bold mx-4 text-3xl md:text-3xl xl:text-5xl">RENTED WHEELS.</h1>
                <ul className="hidden lg:flex items-center">
                    <li>
                        <Link to="/app/home">Home</Link>
                    </li>
                
                    <li>
                        <Link to="/app/cars">Garage</Link>
                    </li>
                </ul>


                <div className="hidden lg:flex mx-16">
                    {!user && <div>
                    <Link to="/app/signin">
                    <button className="bg-transparent hover:bg-indigo-600 hover:text-white lg:px-8 py-3 text-black mr-4 rounded-full">
                       Sign In
                    </button>
                    </Link>
                    <Link to="/app/signup">
                    <button className="px-8 py-3 rounded-full">
                        Sign Up
                    </button>
                    </Link>
                    </div>}


                    {user&&<div className="ml-10 mr-10 px-8  " onClick={handleAvatar}>
                        <img className="h-[50px] w-[100px]" src={profile} />

                        
                        <ul className={!open ? 'hidden' : 'absolute mt-3  bg-white rounded-2xl px-4 py-4'} >
                            {userEmail}
                            
                           <a href="http://localhost:3000/app/bookings"> <li className="hover:bg-gray-200 w-full">My Bookings</li></a>
                            <li onClick={handleLogOut} className="hover:bg-gray-200 w-full">Log Out</li>


                        </ul>
                        
                    </div>}
                </div>
                <div className="lg:hidden block" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 text-center  lg:hidden'} >
                <li className=" w-full">Home</li>
                <li className=" w-full">About</li>
                <li className=" w-full">Support</li>
                <li className=" w-full">Garage</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-7 py-3 mb-3 ">
                        <a href="/app/signin">Sign In</a>
                    </button>
                    <button className="px-7 py-3">Sign Up</button>
                </div>
            </ul>



        </div>
    )
}

export default Navbar;