import React from 'react';
import logo from '../../assets/images/logo.png'
import playstore from '../../assets/images/playstore.png'

const Navbar = () => {

    const menuItems = <>
        <li><a>Blog</a></li>
        <li><a>Career</a></li>
        <li tabindex="0">
            <a class="justify-between">
                My Account
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
    </>

    return (
        <div class="navbar bg-base-200">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo image" />
                </a>
                {/* <p>1st Floor, H 356, Block B, Sector 22, Nodia, Uttar Pradesh 201301</p> */}
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                    <a className='btn btn-ghost mx-5'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg></a>
                    <a class="btn btn-outline"><img className='mr-3' src={playstore} alt="" /> Download App</a>

                </ul>
            </div>

            {/* <div class="navbar-end">
                
            </div> */}
        </div>
    );
};

export default Navbar;