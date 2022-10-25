import React from 'react';

const CoursesLeft = ({c}) => {

    return (
        <div >
            <ul className='flex flex-col items-center'>
                <li className=' w-2/4 font-bold text-xl mb-8 btn btn-outline'>{c.name}</li>
            </ul>
        </div>
    );
};

export default CoursesLeft;