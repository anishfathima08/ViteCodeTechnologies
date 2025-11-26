import React, { useContext } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { myContext } from "../../Context/MyContextProvider";
import { Link } from 'react-router-dom'
const ServiceDetails = () => {

    const { serviceData } = useContext(myContext)

    return (
        <section className="lg:py-10 md:py-10 py-5 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl pb-10 pt-3 font-bold text-center text-blue-700">
                    Our Services
                </h2>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {serviceData.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col justify-between 
                            hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800 ">{value.serviceTitle}</h3>
                                <span className="bg-green-500  text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {value.serviceDiscount} Off
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-gray-400 line-through mr-2">₹{value.serviceOldPrice}</span>
                                <span className="lg:text-3xl text-2xl font-bold">₹{value.serviceNewPrice}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">{value.serviceDescription}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {value.serviceFeatures.map((value, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <HiCheckCircle className="text-green-500 mr-2" /> {value}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <Link to='/contact'>
                                <button className="cursor-pointer w-full bg-gradient-to-r from-sky-800 via-blue-600 to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-300">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
