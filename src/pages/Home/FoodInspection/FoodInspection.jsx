import React from 'react';

const FoodInspection = () => {
    return (
      
<section className="dark:bg-gray-800 dark:text-gray-100 w-10/12 mx-auto pt-20">
	<h2 className='text-center text-2xl font-mono font-bold underline'>Important Think about Food Quality Before Ordered <br /> <span className=' text-red-700 '>by any Food Shope</span></h2>
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left ">
				<h2 className="text-4xl font-bold"> Important Elements in Food Safety Inspection</h2>
				<p className="dark:text-gray-400">According to the World Health Organization 
                     there are five key elements to perform during a food safety inspection 
                     Here is the breakdown.</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 basic-border">
							<p>Cleaning is the first step to perform in all food preparations. Dangerous microorganisms from water, 
                         soil, people, and animals can stick on ingredients, utensils, equipment, and hands. You can transfer 
                         them from one surface to the other, even with the smallest contact.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div>
									<p className="text-lg font-semibold">Cleanliness and Hygiene</p>
									<p className="text-sm dark:text-gray-400">Food & Safty Department</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 basic-border">
							<p>Raw ingredients like meat, poultry, and raw vegetables contain microorganisms. If you do not 
                         separate them from cooked ingredients, dangerous microorganisms can find their way to food 
                         and make everyone sick. This is known as “cross-contamination.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div>
									<p className="text-lg font-semibold">Separation between Raw and Cooked Ingredients</p>
									<p className="text-sm dark:text-gray-400">Food & Safty Department</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 basic-border">
							<p>Thorough cooking, especially with a minimum temperature of 70 degrees Celsius, 
                         can eliminate most of the dangerous microorganisms. 
                         This applies to ingredients like poultry and meat, especially the ones cooked in large pieces.</p>
							<div className="flex items-center mt-4 space-x-4">
								
								<div>
									<p className="text-lg font-semibold">Thorough Cooking</p>
									<p className="text-sm dark:text-gray-400">Food & Safty Department</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 basic-border">
							<p>Proper food storage is also a key part of food safety inspection. Ideally, 
                         food should be stored at a temperature above 60 or below 5 degrees Celsius. 
                         When storing various food items in containers, label them with the food names 
                         and the dates of storing them. They will help you in managing safe food storage.</p>
							<div className="flex items-center mt-4 space-x-4">
								
								<div>
									<p className="text-lg font-semibold">Keeping Food at Safe Temperatures</p>
									<p className="text-sm dark:text-gray-400">Food & Safty Department</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 basic-border">
							<p>Proper food storage is also a key part of food safety inspection. Ideally, 
                         Water, ice cubes, and raw ingredients can contain toxic chemicals and microorganisms. 
                         You must conduct proper food preparation to avoid getting sick or causing sickness.</p>
							<div className="flex items-center mt-4 space-x-4">
								
								<div>
									<p className="text-lg font-semibold">Using Raw Ingredients and Water Safely</p>
									<p className="text-sm dark:text-gray-400">Food & Safty Department</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


    );
};

export default FoodInspection;