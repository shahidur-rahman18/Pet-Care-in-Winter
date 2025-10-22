import React from "react";
import card from'../assets/slider-2.jpg'
import { Link } from "react-router";


const ServiceCard = () => {
  return (
    <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={card} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">hello {/* {name} */}</h2>

        {/* <p>Category: {category}</p> */}
        <p>Category: </p>
        <p>Price: ${/* {price} */}</p>
        <div className="card-actions justify-end">
            
          {/* <Link to={`/productDetails/ ${id}`} className="btn btn-outline">
            View Details
          </Link> */}

          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
