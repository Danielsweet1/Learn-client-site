import React from 'react';
import Header from '../components/Header/Header';
import banner from '../images/studing.jpg'
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Main;