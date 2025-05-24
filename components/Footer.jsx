import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className=' flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <FaFacebookSquare size={24}/>
            <FaLinkedin size={24}/>
            <FaSquareInstagram size={24}/>
            <FaTelegram size={24}/>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p>
              &copy; All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
    </>
  )
}
