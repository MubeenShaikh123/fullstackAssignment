import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-auto mt-10 h-full">
                <a className="flex flex-col  justify-center items-start text-white mb-1">
                    <div className='w-8 h-8 bg-blue-500 rounded-md border-2 border-gray-300'></div>
                </a>
                <span className="text-sm">&#169; copyright 2022</span>
                <p className="text-sm text-white">Abstract Studio Design, Inc.</p>
                <p className="text-sm text-white">All rights reserved</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font text-white tracking-widest text-base mb-3 uppercase font-bold">Abstract</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="/" className="text-sm text-white">Branches</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font text-white tracking-widest text-base mb-3 uppercase font-bold">Resources</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="/" className="text-sm text-white">Blog</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Help Center</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Release Notes</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Status</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font text-white tracking-widest text-base mb-3 uppercase font-bold">Community</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="/" className="text-sm text-white">Twitter</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Dribble</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Podcast</Link>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font text-white tracking-widest text-base mb-3 uppercase font-bold">Company</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="/" className="text-sm text-white">About Us</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Careers</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-sm text-white">Legal</Link>
                        </li>
                    </nav>
                    <h2 className="title-font text-white tracking-widest text-base uppercase font-bold">Contact Us</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <Link to="/" className="text-sm text-white">info@abstract.com</Link>
                        </li>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Footer
