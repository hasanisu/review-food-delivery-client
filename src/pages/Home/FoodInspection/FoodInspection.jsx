import React from 'react';

const FoodInspection = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-lgfont-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                        Food Safety Inspection
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    Important Elements in Food Safety Inspection
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    According to the World Health Organization, 
                    there are five key elements to perform during a food safety inspection. 
                    Here is the breakdown
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Cleanliness and Hygiene</h6>
                        <p className="text-sm text-gray-900">
                        Cleaning is the first step to perform in all food preparations. Dangerous microorganisms from water, 
                        soil, people, and animals can stick on ingredients, utensils, equipment, and hands. You can transfer 
                        them from one surface to the other, even with the smallest contact.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Separation between Raw and Cooked Ingredients</h6>
                        <p className="text-sm text-gray-900">
                        Raw ingredients like meat, poultry, and raw vegetables contain microorganisms. If you do not 
                        separate them from cooked ingredients, dangerous microorganisms can find their way to food 
                        and make everyone sick. This is known as “cross-contamination.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">
                        Thorough Cooking
                        </h6>
                        <p className="text-sm text-gray-900">
                        Thorough cooking, especially with a minimum temperature of 70 degrees Celsius, 
                        can eliminate most of the dangerous microorganisms. 
                        This applies to ingredients like poultry and meat, especially the ones cooked in large pieces.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Keeping Food at Safe Temperatures</h6>
                        <p className="text-sm text-gray-900">
                        Proper food storage is also a key part of food safety inspection. Ideally, 
                        food should be stored at a temperature above 60 or below 5 degrees Celsius. 
                        When storing various food items in containers, label them with the food names 
                        and the dates of storing them. They will help you in managing safe food storage.
                        </p>
                    </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
                    <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                        <h6 className="mb-2 font-semibold leading-5">Using Raw Ingredients and Water Safely</h6>
                        <p className="text-sm text-gray-900">
                        Water, ice cubes, and raw ingredients can contain toxic chemicals and microorganisms. 
                        You must conduct proper food preparation to avoid getting sick or causing sickness.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default FoodInspection;