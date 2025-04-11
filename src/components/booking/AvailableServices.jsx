import { useState } from "react";
import { avaliableService } from "../../lib/avaliableService";

function AvailableServices({ date, selectedService, setSelectedService }) {
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  const price = selectedService ? selectedService.price : "Price";

  return (
    <div>
      <h1>Available Services</h1>

      <div className="flex flex-wrap gap-4 justify-between mt-6">
        <button
          type="button"
          className="text-white bg-gradient-to-r bg-[#1987ee]  w-full sm:w-auto max-w-[12rem] h-[3.5rem] py-3 sm:py-4 px-6 sm:px-10 text-base sm:text-lg font-semibold rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {formattedDate}
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r bg-[#1987ee]  w-full sm:w-auto max-w-[12rem] h-[3.5rem] py-3 sm:py-4 px-6 sm:px-16 text-base sm:text-lg font-semibold rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {price}
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4 py-4 px-6 bg-[#A3D2FF] rounded-2xl shadow-lg">
        {avaliableService.map((service, index) => {
          const isActive = selectedService?.name === service.name;

          return (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`border cursor-pointer transition-all flex flex-col md:flex-row justify-between items-center gap-4 py-4 rounded-xl duration-300 transform hover:scale-105 ${
                isActive
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-xl"
                  : " bg-[#fff]  border-0 to-blue-200 hover:from-blue-200 hover:to-blue-300"
              }`}
            >
              <div className="py-4 px-6 rounded-[3rem] transition-transform duration-300 hover:scale-105">
                <span className="text-gray-800 text-[0.9375rem] font-extrabold leading-[135%]">
                  {service.name}
                </span>
              </div>
              <div className="py-4 px-6 rounded-[3rem] transition-transform duration-300 hover:scale-105">
                <span className="text-gray-900 font-bold">{service.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableServices;
