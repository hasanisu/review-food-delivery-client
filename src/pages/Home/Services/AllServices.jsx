import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [size, setSize] = useState(5);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);

    const pages = Math.ceil(count  / size);

  useEffect(() => {
    fetch(`http://localhost:5000/allServices?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setAllServices(data.data);
        setCount(data.count)
        if (data.success) {
        }
      });
  }, [page, size]);
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

        
       <div className="flex justify-center">
       <div className="join bg-slate-500 mb-10 ">
                {/* <h2>Currently page selected:{page} and size {size}</h2> <br /> */}
                {
                    [...Array(pages).keys()].map(number => <button
                    key={number}
                    className={page === number ? 'join-item btn btn-square bg-red-200 w-16' : 'w-16'}
                    onClick={()=>setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }


                
                <select className="bg-red-500 w-18" onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10" >10</option>
                    <option value="15">15</option>
                </select>
            </div>
       </div>
        

      </div>

      
    </div>
  );
};

export default AllServices;
