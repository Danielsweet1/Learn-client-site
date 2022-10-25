import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesLeft from './CoursesLeft/CoursesLeft';
import CoursesMain from './CoursesMain/CoursesMain';

const Courses = () => {

    const classes = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-12'>
                <div className=' shadow-md m-4 p-3'>
                    {
                        classes.map(c=> <CoursesLeft key={c.id} c={c}></CoursesLeft>)
                    }
                </div>
                <div className='w-3/4 md:col-span-3 col-span-1 grid  grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        classes.map(c=> <CoursesMain key={c.id} c={c}></CoursesMain>)
                    }
                </div>
        </div>
    );
};

export default Courses;