import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-800 text-white w-full' id='contact'>
            <div className='container mx-auto py-12 px-4'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Impact Defined Africa</h3>
                        <p className='text-gray-400'>For A Better Future</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact us</h3>
                        <ul className='space-y-2 text-gray-400'>
                            <li className='flex items-center'>
                                <span className='material-icons mr-2'>email</span>
                                info@impactdefinedafrica.org
                            </li>
                            <li className=' flex items-center'>
                                <span className=' material-icons mr-2'>phone</span>
                                +1123 456 789
                            </li>
                            <li className=' flex items-center'>
                                <span className=' material-icons mr-2'>location_on</span>
                                123 Africa Avenue, Nairobi, Kenya
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                        <div className='space-x-4 '>
                            <a href="" className='text-gray-400 hover:text-white'>
                                <svg aria-hidden="true" class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path clip-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        fill-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a class="text-gray-400 hover:text-white" href="#">
                                <svg aria-hidden="true" class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                    </path>
                                </svg>
                            </a>
                            <a class="text-gray-400 hover:text-white" href="#">
                                <svg aria-hidden="true" class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path clip-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12.011c0 4.61 3.062 8.513 7.237 9.771v-7.009H7.078V12.01H9.27V9.923c0-2.18 1.303-3.395 3.29-3.395.94 0 1.927.173 1.927.173v2.22h-1.11c-1.07 0-1.42.64-1.42 1.36v1.71h2.49l-.396 2.762H11.96V21.78C18.938 20.522 22 16.62 22 12.01 22 6.477 17.523 2 12 2z"
                                        fill-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700  pt-6 text-center text-gray-500 text-sm '>
                <p className='p-2'>© 2025 Impact Defined Africa. All Rights Reserved.</p>
                <p className='p-2'>Developed by <a href='latimore.vercel.app' className='text-white'>Latimore</a></p>
            </div>
        </footer>
    )
}

export default Footer
