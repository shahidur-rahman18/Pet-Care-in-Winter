import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    return (
       <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          All Products{""}{" "}
          <span className="text-sm text-gray-500">
            {/* ({searchProducts.length})  */}
            Products Found.
          </span>
        </h1>
{/* 
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label> */}
      </div>
      {/* {loading ? (
        <SkeletonLoader></SkeletonLoader>
      ) : (
         <div className="max-w-6xl mx-auto p-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchProducts.map((product) => (
            <ProductsCard key={product.id} product={product}></ProductsCard>
          ))}
        </div>
        </div>
      )} */}
      <div className="max-w-6xl mx-auto p-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <ServiceCard></ServiceCard>
         <ServiceCard></ServiceCard>
         <ServiceCard></ServiceCard>
        </div>
        </div>
    </div>
    );
};

export default Services;