import React, { useState } from "react";

import { useGetSkills } from "../../../hook/useGetSkills";
import SkilMap from "./SkilMap";
import Frame from "/imgs/Frame.png";

import cir from "/imgs/cir.png";
import Skeleton from "../education/Skeleton";
import ErrorMessage from "../../ErrorMessage";
export default function AboutMeSkil() {
  const { data, error, isLoading, isError } = useGetSkills();
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className=" text-[40px]  font-bold ">Skills</h1>
      {data.map((item) => (
        <div key={item.id}>
          <SkilMap item={item} Frame={Frame} circleIcon={cir} />
        </div>
      ))}
    </div>
  );
}
