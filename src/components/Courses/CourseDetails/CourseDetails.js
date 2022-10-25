import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const CourseDetails = () => {

    const details = useLoaderData()
    const {id, name, img, description, price, rating} = details
    return (
        <div className='m-8  border p-6'>
            <div className='m-4 flex justify-between items-center'>
                <p className='text-3xl font-bold'> {name}</p>
                <FaDownload className='text-3xl text-blue-400'/>
            </div>
            <img className=' h-96 w-full border mx-auto' src={img} alt="" />
            <p>{description}</p>
            <div className='mt-6'>
                <p className='text-xl font-bold text-red-500 mb-2'>Course Fee: {price}</p>
                <p className='font-bold'>Rating: <span className='font-bold text-orange-400'>{rating}</span></p>
            </div>
            <button className="btn btn-outline btn-accent my-5">Get Premium Access</button>
        </div>
    );
};

export default CourseDetails;