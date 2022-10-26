import React from 'react';
import { Link } from 'react-router-dom';

const FouroFourRoute = () => {
    return (
        <div className='text-center mt-24'>
            <h3 className='text-8xl font-bold'>404</h3>
            <p className='text-5xl font-bold'>Not Found</p>
            <p className='text-3xl font-semibold mb-2'>Please try With a Valid Route</p>
            <p>Go to:  <Link to='/' className='text-blue-500'>Home</Link></p>
        </div>
    );
};

export default FouroFourRoute;