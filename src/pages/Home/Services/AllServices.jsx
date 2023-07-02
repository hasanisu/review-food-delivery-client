import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allServices`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllServices(data.data);
        if (data.success) {
        }
      });
  }, []);
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="space-y-2 text-center mt-6 mb-16">
          <h2 className="text-3xl font-bold">All Services List</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Form here you can check my delivey and review your post service .
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
          {allServices.map((service) => (
            <ServiceItem key={service._id} service={service}></ServiceItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
