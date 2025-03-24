import React from "react";
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Appointment from "../assets/BKapp.png";
import AppointmentBK from "../assets/BGBK.png";

const Calltoaction = () => {
    return (
       <div className="flex justify-center items-center bg-gray-50  ">
        <div className="w-7/9 h-9/10 rounded-3xl shadow-2xl border-2 border-cyan-500">
        <div className="relative bg-gray-50 p-6 z-10 container mx-auto px-6 py-10 lg:px-12 rounded-3xl">
            {/* Main CTA Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center space-y-9s">
                    <div >
                        <img src={Appointment} alt="Book an appointment" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mr-9  mt-6">
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white ml-5 px-10 py-2 sm:px-6 sm:py-3 rounded-3xl font-semibold shadow-md transition">
                            Generate HealthCard
                        </button>
                        <button className="border border-cyan-600 text-cyan-600 px-4 py-1 sm:px-5 sm:py-2 rounded-3xl font-semibold shadow-md transition hover:bg-cyan-100">
                            Learn More
                        </button>
                    </div>
                </div>

               
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 mr-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-900 max-w-lg">
                        Get expert advice from top doctors anytime, <span className="text-cyan-600">anywhere!</span>
                    </h2>
                    <p className="text-base sm:text-lg text-cyan-950 max-w-lg">
                        Connect with qualified healthcare professionals and receive personalized medical consultation from the comfort of your home.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-between w-full max-w-lg bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
                        {["Get Consultation", "Book Appointment", "Find Best Doctor", "Get Expert Opinion"].map((text, index) => (
                            <button 
                                key={index} 
                                className={`flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 text-cyan-900 font-medium w-1/2 sm:w-1/4 text-sm transition-all duration-300 ${index !== 3 ? "border-b sm:border-b-0 sm:border-r border-gray-300" : ""} hover:bg-cyan-100`}>
                                <span className="flex items-center gap-2">
                                    {text} <HiArrowRight size={14} />
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Section at the Bottom */}
        
                {/* <div className="flex justify-center items-center"> */}
                <div className="pr-10  ml-13">
                    <h2 className="text-lg ml-4  mt-6 sm:text-xl font-semibold text-gray-800 text-start mb-4">
                    Book an appointment in <span className="text-cyan-600">3 simple steps</span>
                </h2>
                
                <form className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Email Field */}
                    <div>
                        <label className="text-sm mb-2 font-medium text-gray-700 flex items-center gap-2">
                            <FaEnvelope className="text-cyan-500" /> Email
                        </label>
                        <input  type="email"  placeholder="Enter email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
        
                 
                    <div>
                        <label className="text-sm mb-2 font-medium text-gray-700 flex items-center gap-2">
                            <FaPhoneAlt className="text-cyan-500" /> Full Name
                        </label>
                        <input type="text" placeholder="Enter Full Name"  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
        
                    {/* Date Field */}
                    <div>
                    <label className="text-sm mb-2 font-medium text-gray-700 flex items-center gap-2">
                            <FaPhoneAlt className="text-cyan-500" /> Contact
                        </label>
                        <input type="text" placeholder="Enter number"  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
        
                    {/* Button */}
                    <div className="flex items-end">
                        <button className="w-full ml-11 sm:w-auto bg-cyan-600 text-white px-3 py-3 rounded-3xl hover:bg-cyan-700 transition">
                            Quick Appointment
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       </div>
     
    );
}

export default Calltoaction;
