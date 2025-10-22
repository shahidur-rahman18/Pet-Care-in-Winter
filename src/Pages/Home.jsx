import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

import Tips from "../components/Tips";
import Expert from "../components/Expert";
import useServices from "../Hook/useServices";
import { Link } from "react-router";

const Home = () => {
  const { services } = useServices();
  const featuredServices = services.slice(0, 3);
  return (
    <div>
      <Banner></Banner>

      <div className="flex justify-between py-5 items-center">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
              // console.log(service)
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/allservices"}>
          <button
            className="btn px-8 mb-2 text-white border-none"
            style={{
              background: "linear-gradient(to right, #632EE3 0%, #9F62F2 100%)",
            }}
          >
            Show All
          </button>
        </Link>
      </div>
      <Tips></Tips>
      <Expert></Expert>
    </div>
  );
};

export default Home;
