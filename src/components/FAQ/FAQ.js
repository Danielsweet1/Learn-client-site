import React from "react";
import img from "../../images/Faq.webp";

const FAQ = () => {
  return (
    <div className=" mx-12 my-4 border ">
      <img className="w-full h-96" src={img} alt="" />
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">
            1. How much does the courses cost?
          </h2>
          <p>
            The courses cost from 100$ to 600$. You can visit out courses page
            to know more.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">
            2. How long is the course duration?
          </h2>
          <p>
            Most of the courses are about three months long. But it depends on
            the students of the course.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">
            {" "}
            3. What is your contact information?
          </h2>
          <p> 0174585425-- Phone number admin@gmail.com-- Gmail address</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
