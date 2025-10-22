import React, { useState } from "react";
import useServices from "../Hook/useServices";
import { Link } from "react-router";
import ServiceCard from "../components/ServiceCard";

const AllServices = () => {
  const { services} = useServices();
  console.log(services);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  // console.log(term)
  const searchServices = term
    ? services.filter((service) =>
        service.serviceName.toLocaleLowerCase().includes(term)
      )
    : services;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearch(true);
    setTimeout(() => {
      setIsSearch(false);
    }, 300);
  };

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center p-3">
        Our All Services
      </h1>
      <p className="text-sm text-center text-[#627382]">
        Explore All Services on the Market developed by us. We code for Millions
      </p>
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="py-3 text-xl md:text-xl font-bold">
            ({searchServices.length}) Apps Found
          </h1>
          <label className="input">
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="Search Services"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-between py-5 items-center">
        <div className="max-w-7xl mx-auto p-4">
          {isSearch ? (
            // <Spinner></Spinner>
            <h1>this is </h1> 
          ) : searchServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {searchServices.map((service) => (
                <ServiceCard key={service.id} service={service}></ServiceCard>
              ))}
            </div>
          ) : (
            <div>
              <div className=" max-w-6xl mx-auto flex flex-col justify-center items-center py-12 ">
                <h1 className="text-4xl font-bold">No Service Found</h1>
                <Link to={"/"}>
                  <button
                    className="btn px-8 mt-5 text-white border-none"
                    style={{
                      background:
                        "linear-gradient(to right, #632EE3 0%, #9F62F2 100%)",
                    }}
                  >
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
