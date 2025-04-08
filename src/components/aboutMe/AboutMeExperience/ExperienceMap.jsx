import React from "react";
import { motion } from "framer-motion";

export default function ExperienceMap({ item, Frame, id, circleIcon }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-4"
    >
      <div className="flex justify-between items-center p-[16px] border-[1px] border-[#727272c9] rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start w-full gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
              <img src={circleIcon} alt="circle icon" />
            </div>
            <img src={Frame} className="max-h-[50px] mt-2" alt="vector" />
          </div>

          <div className="flex flex-col justify-center text-[9px] md:text-[15px] lg:text-[20px]">
            <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
              {item.place}
            </h2>
            <div className="flex gap-4">
              <h3 className="font-poppinsExtraBold uppercase">
                {item.department}
              </h3>
              <span className="font-heeboRegular opacity-50">
                {`${item.dateFrom ? item.dateFrom.slice(0, 4) : "Unknown"} - ${
                  item.dateTo ? item.dateTo.slice(0, 4) : "Present"
                }`}
              </span>
            </div>
            <h4 className="font-heeboRegular opacity-50">{item.position}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
