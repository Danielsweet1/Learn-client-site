import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Premuimaccess = () => {
  const purchase = () => {
    Swal.fire("Congratulations!", "You Purchased Successfully !", "success");
  };
  const data = useLoaderData();
  const { name, price, img, tutor, duration } = data;
  return (
    <div className="my-8 ">
      <div className="card w-96 bg-base-100 mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="flex flex-col items-start mb-4">
            <p className="font-bold">Mentor: {tutor}</p>
            <p className="font-bold">Course Duration: {duration}</p>
            <p className="text-purple-500 font-semibold">Course fee: {price}</p>
          </div>
          <div className="card-actions">
            <button onClick={purchase} className="btn btn-primary">
              Purchase Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premuimaccess;
