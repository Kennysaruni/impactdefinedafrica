import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    const textRef = useRef(null);
    const isTextInView = useInView(textRef, { once: true, margin: '0px 0px -100px 0px' });

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
        }
    };

    return (
        <section className='py-16 sm:py-20 bg-gray-50 ' id='about'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> {/* Added padding */}
                {/* Main About Us content - Image and Description */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16'> {/* Adjusted gap */}
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={imageVariants}
                    >
                        <img
                            src="https://impactdefined.vercel.app/assets/logo.jpg"
                            alt="Impact Defined Africa Logo"
                            className='rounded-2xl shadow-lg w-full h-auto object-cover max-h-96 md:max-h-full transform hover:scale-105 duration-300' // Added object-cover, max-h
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/400x300/cccccc/333333?text=Logo+Image'; // Fallback placeholder
                            }}
                        />
                    </motion.div>
                    <motion.div
                        ref={textRef}
                        initial="hidden"
                        animate={isTextInView ? 'visible' : 'hidden'}
                        variants={textVariants}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight'>About Us</h2>
                        <p className='text-base sm:text-lg text-gray-600 mb-4 leading-relaxed'>
                            We are a youth-led organization dedicated to empowering young people across Africa with the digital, entrepreneurial, and social skills they need to thrive in today’s world. Our mission is to nurture a generation of innovative, socially conscious, and economically empowered African youth.
                        </p>
                        <p className='text-base sm:text-lg text-gray-600 mb-4 leading-relaxed'>
                            We believe in a collaborative approach, working hand-in-hand with local partners to create lasting impact. Our team is composed of passionate individuals committed to building a better future for all Africans.
                        </p>
                        <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                            By equipping young minds with cutting-edge digital literacy, entrepreneurial thinking, and essential life skills, we envision a continent where youth drive inclusive growth, sustainable development, and lasting impact in their communities and beyond.
                        </p>
                    </motion.div>
                </div>

                {/* Mission and Vision section - now properly structured */}
                <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16'> {/* Centered and added padding */}
                    <motion.div
                        initial="hidden"
                        animate={isTextInView ? 'visible' : 'hidden'} // Reuse animation for consistency
                        variants={textVariants}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mt-8 leading-tight'>Our Mission</h2>
                        <p className='text-base sm:text-lg text-gray-600 mb-8 leading-relaxed'>
                            To raise confident and capable young leaders through mentorship rooted in civic responsibility, entrepreneurship and digital skills.
                        </p>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight'>Our Vision</h2>
                        <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                            We build a community of inspired youth by offering mentorship programmes that blend leadership and development with civic, entrepreneurial and digital education.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;