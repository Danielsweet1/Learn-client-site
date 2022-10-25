import React from "react";


const CoursesMain = ({ c }) => {
  const { id, name, img, description, price, rating } = c;

  return (
    <div >
      <div className="card card-compact w-80 ml-6   bg-base-100 shadow-xl">
        <figure>
          <img className="h-48" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 200) + ".."}</p>
          <div className="card-actions justify-between items-center">
            <p className="font-bold text-xl text-red-500"><small>Price: {price}</small></p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesMain;
