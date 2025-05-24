import React from 'react'
import pic from '../assets/profile2.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
export default function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className='flex flex-col md:flex-row'>
                    <div className="md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1">
                        <span className='tetx-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a </h1>
                            {/* <span className='text-red-700 font-bold'> Developer </span> */}
                            <ReactTyped className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Welcome to my portfolio! Here you'll find a collection of my latest projects, showcasing my skills in front-end and back-end development. From responsive web designs to full-stack applications, I specialize in building clean, user-friendly, and performance-driven digital experiences.</p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className="flex space-x-5">
                                        <a href="https://www.facebook.com/share/1FNWd8Snp3/" target='_blank'>
                                    <li>
                                        <FaFacebookSquare className='text-2xl cursor-pointer hover:scale-110' />
                                    </li>
                                        </a>
                                    <a href="https://www.linkedin.com/in/anshu-singh-3a426330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                    <li>
                                        <FaLinkedin className='text-2xl cursor-pointer hover:scale-110' />
                                    </li>
                                    </a>
                                    <a href="https://www.instagram.com/its__anshu_singh_" target= "_blank">
                                    <li>
                                        <FaSquareInstagram className='text-2xl cursor-pointer hover:scale-110' />
                                    </li>
                                    </a>
                                   <a href="t.me/Anshu_singh_15" target='_blank'>
                                   <li>
                                        <FaTelegram className='text-2xl cursor-pointer hover:scale-110' />
                                    </li>
                                   </a>
                                </ul>

                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className="flex space-x-5">

                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-2 order-1">
                    <img src={pic}
                    className='rounded-full md:w-[450px] md:h-[450px]'
                    alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

