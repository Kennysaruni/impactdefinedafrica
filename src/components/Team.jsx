import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import person from '../assets/person.jpg'; 

function Team() {
    // Data for team members
    const teamMembersData = [
        {
            id: 1,
            name: 'Livingstone Adenga',
            title: 'Head of Community Engagement',
            description: 'I empower young people across Africa by fostering digital literacy, entrepreneurial spirit, and civic responsibility, building a vibrant community of future leaders.',
            imageUrl: 'https://placehold.co/128x128/f59e0b/ffffff?text=LA', // Using a placeholder for now
        },
        {
            id: 2,
            name: 'Kelvin Macharia',
            title: 'Chief Programs Officer',
            description: 'My role is to design and implement impactful mentorship programs that blend leadership development with essential digital and entrepreneurial skills for African youth.',
            imageUrl: 'https://placehold.co/128x128/6d28d9/ffffff?text=KM', // Using a placeholder for now
        },
        {
            id: 3,
            name: 'Fatima Zahra',
            title: 'Partnerships Director',
            description: 'I forge collaborations with local organizations and stakeholders, ensuring our initiatives create sustainable and far-reaching positive change across the continent.',
            imageUrl: 'https://placehold.co/128x128/0e7490/ffffff?text=FZ', // Using a placeholder for now
        },
    ];

    // Ref for the main grid container to trigger animations
    const gridRef = useRef(null);
    const isGridInView = useInView(gridRef, { once: true, margin: '40px 0px 150px 0px' });

    // Framer Motion variants for individual team member cards
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.15, // Staggered animation for each card
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section className='py-16 sm:py-20 bg-gray-50 w-full ' id='team'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'> {/* Centered text and added padding */}
                <h1 className='text-3xl md:text-5xl text-gray-800 font-bold tracking-tight mb-4'>
                    Team and People
                </h1>
                <p className='text-base sm:text-lg text-gray-600 mb-12 mt-8 max-w-3xl mx-auto leading-relaxed'>
                    Behind every great organization is a team of passionate people. We're a group of innovators, thinkers, and doers, all working together to empower young Africans. Our collective skills in digital literacy, entrepreneurship, and community building drive our mission to create a brighter future. Meet the people leading the change.
                </p>

                {/* Team Members Grid */}
                <div
                    ref={gridRef}
                    className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4' // Added responsive grid, gap, and horizontal padding
                >
                    {teamMembersData.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center'
                            initial="hidden"
                            animate={isGridInView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            custom={index} // Pass index for staggered animation
                        >
                            <div className='relative w-32 h-32 rounded-full overflow-hidden mb-6 '> {/* Added ring */}
                                <img
                                    src={person} // Use the imageUrl from teamMembersData
                                    alt={member.name}
                                    className='w-full h-full object-cover'
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/128x128/cccccc/333333?text=${member.name.split(' ').map(n => n[0]).join('')}`;
                                    }}
                                />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                            <p className='text-base text-gray-900 font-medium mb-4'>{member.title}</p>
                            <p className='text-gray-700 text-sm leading-relaxed mb-6 flex-grow'>{member.description}</p>
                           
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;