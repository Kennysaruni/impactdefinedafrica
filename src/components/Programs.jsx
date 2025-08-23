import React from 'react'

function Programs() {
   
  return (
   <section className='py-20' id='programs'>
    <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-800'>Our Programs</h2>
        <p className='text-gray-600 mt-2s'>Driving change through targeted initiatives.</p>
    </div>
    <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='text-green-500 mb-4'>
                <span className='material-icons text-4xl'>school</span>
                <h3 className='text-xl font-semibold text-gray-800 mb2'>Digital Skills</h3>
                <p className='text-gray-600'>Our digital skills program equips young Africans with the knowledge and tools to thrive in the digital age.</p>
            </div>
        </div>
        <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='text-green-500 mb-4'>
                <span className='material-icons text-4xl'>health_and_safety</span>
                <h3 className='text-xl font-semibold text-gray-800 mb2'>Entrepreneurial skills</h3>
                <p className='text-gray-600'>Our entrepreneurial program helps young people develop an entrepreneurial mindset, build businesses, and create sustainable solutions for their communities.</p>
            </div>
        </div>
        <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='text-green-500 mb-4'>
                <span className='material-icons text-4xl'>trending_up</span>
                <h3 className='text-xl font-semibold text-gray-800 mb2'>Civic Engagement</h3>
                <p className='text-gray-600'>Our civic engagement initiatives train young people to understand their rights, responsibilities, and the importance of participating in governance and decision-making. </p>
            </div>
        </div>
        <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='text-green-500 mb-4'>
                <span className='material-icons text-4xl'>school</span>
                <h3 className='text-xl font-semibold text-gray-800 mb2'>Digital Skills</h3>
                <p className='text-gray-600'>Our digital skills program equips young Africans with the knowledge and tools to thrive in the digital age.</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Programs
