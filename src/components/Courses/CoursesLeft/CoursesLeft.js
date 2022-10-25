import React from 'react';
import { Link } from 'react-router-dom';

const CoursesLeft = ({c}) => {

    return (
        <div >
            <ul className='flex flex-col items-center'>
                <li className=' w-2/4 font-bold text-xl mb-8 btn btn-outline'><Link to={`/classes/${c.id}`}>{c.name}</Link></li>
            </ul>
        </div>
    );
};

export default CoursesLeft;