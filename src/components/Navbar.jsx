import React, { useState } from 'react'
import logo from "../assets/logo.jpg"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = () => {
        setIsMenuOpen(false)
    }


    return (
        <div className='container mx-auto px-4 ralative z-20'>
            <header className='flex justify-between items-center py-6'>
                <div className=''>
                    <img src={logo} alt="Impact Defined Africa Logo" className='h-20' />

                </div>
                <nav className='hidden md:flex item-center space-x-8'>
                    <a href="#about" className='text-gray-700 hover:text-amber-700'>About Us</a>
                    <a href="#programs" className='text-gray-700 hover:text-amber-700'>Our Programmes</a>
                    <a href="#contact" className='text-gray-700 hover:text-amber-700'>Contact</a>
                </nav>
                <button
                    className='md:hidden p-2 rounded-md text-gray-700 hover:text-amber-700 hover:bg-gray-500 focus-outline-none'
                    onClick={toggleMenu}
                    aria-label='Toggle Menu'>
                    <span className='material-icons text-3xl'>
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
                {isMenuOpen && (
                    <nav
                        className=' md:hidden fixed inset-0 z-50 bg-white shadow-lg py-4 space-y-8 border-t border-gray-200 flex flex-col items-center justify-center space-x-8'>
                        <button className='absolute top-7 right-4 p-2 rounded-md text-gray-700 hover:text-amber-700 '
                        onClick={toggleMenu}>
                            <span className='material-icons text-4xl'>close</span>
                        </button>
                        <a href="#about"
                            className='block text-gray-700 hover:text-amber-700 font-medium px-4 transition-colors duration-300'
                            onClick={handleNavClick}>
                            About
                        </a>
                        <a href="#about"
                            className='block text-gray-700 hover:text-amber-700 font-medium px-4 transition-colors duration-300'
                            onClick={handleNavClick}>
                            Our Programmes
                        </a>
                        <a href="#about"
                            className='block text-gray-700 hover:text-amber-700 font-medium px-4 transition-colors duration-300'
                            onClick={handleNavClick}>
                            Contact Us
                        </a>
                    </nav>
                )}
            </header>

        </div>
    )
}

export default Navbar
