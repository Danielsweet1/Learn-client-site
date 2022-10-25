import React from 'react';
import CoursesLeft from './CoursesLeft/CoursesLeft';
import CoursesMain from './CoursesMain/CoursesMain';

const Courses = () => {
    return (
        <div className='flex'>
                <div className='w-24'>
                    <CoursesLeft></CoursesLeft>
                </div>
                <div className='w-96'>
                    <CoursesMain></CoursesMain>
                </div>
        </div>
    );
};

export default Courses;