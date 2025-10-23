import React from "react";

import { Link } from "react-router";
import { CiStar, CiStreamOff } from "react-icons/ci";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { id, serviceName, image, rating, price } = service;
  // console.log(id, serviceName, image, rating, price);
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="aspect-square overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>

        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
