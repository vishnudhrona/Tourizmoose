import React, { useState } from 'react'
import 'flowbite'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        // <nav className="fixed w-full z-20 top-0 start-0">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link
        //             href="https://flowbite.com/"
        //             className="flex items-center space-x-3 rtl:space-x-reverse"
        //         >
        //             <img
        //                 src="/homepagelogo.svg"
        //                 className="md:h-51 md:w-48 md:top-6 md:mx-10"
        //                 alt="Tourizmoose logo"
        //             />
        //         </Link>
        //         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        //         <ul className="flex  md:p-0 font-medium rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        //                 <li>
        //                     <Link
        //                         className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0"
        //                     >
        //                         <div className='flex gap-3'>
        //                         <img src="/indianflag.svg" alt="Indian flag" />
        //                         <span>INR</span>
        //                         </div>
        //                     </Link>
        //                 </li>
        //                 <li className='md:pr-5'>
        //                     <Link
        //                         className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 "
        //                     >
        //                         <div className='flex gap-2'>
        //                         <img src="/navbarmanu.svg" alt="Menu image" />
        //                         <span>Menu</span>
        //                         </div>
        //                     </Link>
        //                 </li>
        //             </ul>

        //             <button
        //                 type="button"
        //                 className="text-blue-500 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-6 py-1 text-center"
        //             >
        //                 login
        //             </button>
        //             <button
        //             onClick={toggleMenu}
        //                 type="button"
        //                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //                 aria-controls="navbar-sticky"
        //                 aria-expanded={isMenuOpen ? 'true' : 'false'}
        //             >
        //                 <span className="sr-only">Open main menu</span>
        //                 <svg
        //                     className="w-5 h-5"
        //                     aria-hidden="true"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                     viewBox="0 0 17 14"
        //                 >
        //                     <path
        //                         stroke="currentColor"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth={2}
        //                         d="M1 1h15M1 7h15M1 13h15"
        //                     />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
        //             id="navbar-sticky"
        //         >
        //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold text-xl border border-navbar rounded-lg bg-navbar md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        //                 <li>
        //                     <Link
        //                         className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 md:w-50"
        //                     >
        //                         Explore Destinations
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link
        //                         className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 md:w-50"
        //                     >
        //                         Explore Packages
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/homepagelogo.svg"
                        className="h-8 lg:h-51 lg:w-48 lg:top-6 lg:mx-10 hidden sm:block"
                        alt="Flowbite Logo"
                    />

                    <img
                        src="/phonenavbarlogo.svg"
                        className="h-8 block sm:hidden"
                        alt="Flowbite Logo"
                    />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-blue-500 focus:ring-4 focus:outline-none sm:hidden focus:ring-blue-300 font-medium rounded-3xl text-xs px-3 py-2 text-center border border-blue-500"
                    >
                        PICK A PACKAGE
                    </button>
                    <button
                        type="button"
                        className="text-blue-500 focus:ring-4 focus:outline-none sm:hidden focus:ring-blue-300 font-medium rounded-3xl text-xs px-3 py-2 text-center border border-blue-500"
                    >
                        PLAN YOUR TRIP
                    </button>
                    <ul className="flex md:p-0 font-medium rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                className="py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 sm:block hidden"
                            >
                                <div className='flex gap-3'>
                                    <img src="/indianflag.svg" alt="Indian flag" />
                                    <span>INR</span>
                                </div>
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                className="sm:block hidden py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 "
                            >
                                <div className='flex gap-2'>
                                    <img src="/navbarmanu.svg" alt="Menu image" />
                                    <span>Menu</span>
                                </div>
                            </Link>
                        </li>
                        <li className='pr-5 sm:pt-2 md:pt-0'>
                            <button
                                type='button'
                                className="sm:block hidden text-blue-500 bg-white font-medium rounded-3xl text-sm text-center py-1 px-6"
                            >
                                login
                            </button>
                        </li>
                    </ul>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="hidden sm:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold lg:text-xl text-base border border-navbar rounded-lg bg-navbar md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 md:w-50"
                            >
                                Explore Destinations
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block py-2 px-3 text-white rounded hover:bg-gray-500 md:p-0 md:w-50"
                            >
                                Explore Packages
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
