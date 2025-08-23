import React from 'react'

function Hero() {
    return (
        <section className='text-center py-20 lg:py-32'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>Empowering <span className='text-amber-700'>Africa's</span> Future  <span className='text-green-500'>Together.</span></h1>
                <p className='text-lg md:text-xl text-gray-600 mb-8'> We are commited to sustaining suatainable solutions for a brighter and more prosperous Africa.</p>
                <a href="#getinvolved" className='bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300'>Get Involved</a>
            </div>
        </section>
    )
}

export default Hero
