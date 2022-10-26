import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/studing.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Best Effective Learning Platform</h1>
            <p className="mb-5 font-bold">
              We have different types of Courses related to Programming .Who ever wants to learn programming effectively can join with us to enhance the Knowledge on programming
            </p>
            <Link to='/courses'><button className="btn btn-primary">Explore Our Courses</button></Link>
          </div>
        </div>
      </div>

      <div className="mt-8 mx-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Speciality</h2>
        <p>Why Join us? We have experienced teachers on programming . They are much friendly to the students . Beside this we have 24/7 support service. we have our job related team . They Work for collecting job related information. To help our students to get job easily.</p>
      </div>
    </div>
  );
};

export default Home;
