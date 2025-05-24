import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const userInfo = {
            name : data.name,
            email : data.email,
            message : data.message,
        };
    try {
        await axios.post("https://getform.io/f/apjnwoya", userInfo);
        toast.success("Your message has been sent!");
        reset(); // if using react-hook-form's reset
    } catch (error) {
        console.log(error);
        toast.error("something went wrong");
        // alert("Something went wrong. Please try again.");
    }
};
    return (
        <>
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16">
                <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
                <span>Please feel free to contact me</span>
                <div className='flex flex-cols items-center justify-center mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} 
                    // action="https://getform.io/f/apjnwoya" 
                    // method="POST" 
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send your message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Full Name
                            </label>
                            <input {...register("name", { required: true })} className='shadow rounded-lg apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='name' name="name" placeholder='Enter Your Full Name' />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Email Address
                            </label>
                            <input {...register("email", { required: true })} className='shadow rounded-lg apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='name' name="email" placeholder='Enter Your Email Address' />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Message
                            </label>
                            <textarea {...register("message", { required: true })} className='shadow rounded-lg apperance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='name' name="message" placeholder='Enter Your Message' />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
