import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const details = useLoaderData();
  const { id, name, img, description, price, rating } = details;
  return (
    <div ref={ref} className="">
      <div className="m-8 flex justify-between items-center">
        <p className="text-3xl font-bold"> {name}</p>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <FaDownload onClick={toPdf} className="text-3xl text-blue-400 hover:cursor-pointer " />
          )}
        </Pdf>
      </div>
      <img className=" h-96 w-full border mx-auto" src={img} alt="" />
      <div className="m-8 max-w-3xl">
        <p className="m-1 ">{description}</p>
        <ul className="m-3 font-semibold">
          <p className="font-bold text-xl">Our Services</p>
          <li>* Both Online And Offline Classes</li>
          <li>* Lifetime Support</li>
          <li>* Job Related Help</li>
          <li>* 24/7 service</li>
        </ul>
        <div className="mt-6">
          <p className="text-xl font-bold text-red-500 mb-2">
            Course Fee: {price}
          </p>
          <p className="font-bold">
            Rating: <span className="font-bold text-orange-400">{rating}</span>
          </p>
        </div>
        <Link to={`/premium/${id}`}>
          <button className="btn btn-outline btn-accent my-5">
            Get Premium Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
