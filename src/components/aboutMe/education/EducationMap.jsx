import React from "react";

export default function EducationMap({
  deletes,
  handleDelete,
  pen,
  handleEditClick,
  item,
  Frame,
  id,
  circleIcon,
}) {
  return (
    <div>
      <div
        key={id}
        className="flex justify-between items-center p-[16px] border-[1px] border-[#727272c9] rounded-lg"
      >
        <div className="flex items-start w-full  gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
              <img src={circleIcon} alt="circle icon" />
            </div>
            <img src={Frame} className="max-h-[50px] mt-2" alt="vector" />
          </div>

          <div className="flex flex-col justify-center text-[9px] md:text-[15px] lg:text-[20px]">
            <h2 className="font-poppinsExtraBold font-bold leading-[135%] uppercase">
              {item.uni}
            </h2>
            <div className="flex gap-4">
              <span className="font-heeboRegular opacity-50">
                {`${item.dateFrom ? item.dateFrom.slice(0, 4) : "Unknown"} - ${
                  item.dateTo ? item.dateTo.slice(0, 4) : "Present"
                }`}
              </span>
            </div>
            <h3 className="font-poppinsExtraBold font-bold uppercase">
              {item.degree}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
