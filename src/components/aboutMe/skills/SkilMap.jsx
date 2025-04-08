import React from "react";

export default function SkilMap({
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
              <h2 className="font-bold leading-[135%] uppercase">
                {item.skil}
              </h2>
              <div className="flex gap-4">
                <p className="font-openSans uppercase">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
