import React from 'react';
import eshu from './../../assets/Images/20200920_225031.jpg';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-neutral absolute">
                <div class="navbar-start">
                    <div class="dropdown ml-3">
                        <label tabindex="0" class="btn btn-ghost text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-5 shadow bg-neutral-content rounded-box w-52">
                            <li><a href='#hero'>Homepage</a></li>
                            <li><a href='#food' >Food</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#list'>Food List</a></li>
                            <li><a href='#footer'>Footer</a></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <a class="btn btn-ghost normal-case text-xl text-red-500 ">
                        FAST FOOD GHOR
                    </a>
                </div>
                <div class="navbar-end mr-3">
                    <button class="btn btn-ghost btn-circle text-red-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button class="btn btn-ghost btn-circle text-red-500 ">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
                {/* <div class="dropdown dropdown-end ">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-12 rounded-full">
                            <img src={eshu} />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;