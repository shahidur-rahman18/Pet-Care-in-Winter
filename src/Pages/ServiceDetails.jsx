import React from 'react';
import { Link, useParams } from 'react-router';
import useServices from '../Hook/useServices';

const ServiceDetails = () => {
    const {services} =useServices()
    const {id} =useParams()
    const numericId = Number(id);
    const singleCard = services.find(item => item.id === numericId);
    // console.log(singleCard)
    
    console.log('details',services)
     const { serviceName, image, rating, price,description } = singleCard || {} ;
     console.log('this data ',serviceName, image, rating, price)
    
    return (
        <div className="card bg-base-100   shadow-sm  mb-5">
      <figure className="aspect-square overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>

        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <p>Rating: {description}</p>
        <div className="card-actions justify-end">
          <Link to={`/`} className="btn btn-outline">
            Go Back
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;