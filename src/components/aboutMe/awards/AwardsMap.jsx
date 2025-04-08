import React from "react";

export default function AwardsMap({
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
      {" "}
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
              <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
                {item.name}
              </h2>
              <div className="flex gap-4">
                <p className="text-gray-800 text-semiTransparent text-[1.15rem] font-bold break-all">
                  {item.awardedBy}
                </p>
                <p className="text-gray-600 text-semiTransparent">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
