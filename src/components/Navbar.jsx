import React from 'react'
import logo from "../assets/logo.jpg"

function Navbar() {
    return (
        <div className='container mx-auto px-4'>
            <header className='flex justify-between items-center py-6'>
                <div className='flex items-center'>
                    <img src={logo} alt="Impact Defined Africa Logo" className='h-40' />

                </div>
                <nav className='hidden md:flex item-center space-x-8'>
                    <a href="#about" className='text-gray-700 hover:text-amber-700'>About Us</a>
                    <a href="#programs" className='text-gray-700 hover:text-amber-700'>Our Programmes</a>
                    <a href="#contact" className='text-gray-700 hover:text-amber-700'>Contact</a>
                </nav>
            </header>
            <button className='md:hidden'>
                <span className='material-icons'>menu</span>
            </button>

        </div>
    )
}

export default Navbar
