import React, { useState } from 'react'
import Mongodb from '../assets/tech_logo/mongodb.png'
import Node from '../assets/tech_logo/nodejs.png'
import Reactjs from '../assets/tech_logo/reactjs.png'
import HTML from '../assets/tech_logo/html.png'
import JS from '../assets/tech_logo/javascript.png'

export default function Projects() {
    const cardItems = [
        {
            id: 1,
            logo: Mongodb,
            name: "MongoDB",
        },
        {
            id: 2,
            logo: Reactjs,
            name: "ReactJS",
        },
        {
            id: 3,
            logo: HTML,
            name: "HTML",
        },
        {
            id: 4,
            logo: JS,
            name: "JavaScript",
        },
        {
            id: 5,
            logo: Node,
            name: "Node",
        },
    ];

    return (
        <div name = "Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className='text-3xl font-bold mb-5'>
                    Portfolio
                </h1>
                <span className='underline font-semibold text-green-600'>
                    Featured Projects
                </span>

                <div className='grid grid-col-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItems.map(({ id, logo, name }) => (
                        <div key={id} className='md:w-[300px] md:h-[300px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt={name} />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className=' px-6 py-4 space-x-4 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
