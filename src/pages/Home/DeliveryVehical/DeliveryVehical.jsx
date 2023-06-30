import React from 'react';

const DeliveryVehical = () => {
    return (
        <div>
            <section className="py-6 bg-gray-800 text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl font-mono">Delivery Vehical</h1>
		<p className="max-w-2xl text-center dark:text-gray-400 font-serif">Belows vehical are used for food delivery, and it`s depends on the distance of order</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/mRVZmKN/cycle.jpg" />
				<p className="text-xl font-semibold leadi">Delivery Cycle</p>
				<p className="dark:text-gray-400">Under 10 Kilometers</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/ZVtWk8w/bike.jpg" />
				<p className="text-xl font-semibold leadi">Delivery Bike</p>
				<p className="dark:text-gray-400">For 10-25 Kilometers</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/py9m1xQ/car.jpg" />
				<p className="text-xl font-semibold leadi">Delivery Car</p>
				<p className="dark:text-gray-400">Above 25 kilometers</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default DeliveryVehical;