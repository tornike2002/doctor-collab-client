import React, { useRef } from "react";

import CardGrid from "./CardGrid";

import ServiceSkeleton from "./ServiceSkeleton";
import { useGetServices } from "../../../hook/useGetServices";
export default function ServiceCard() {
  const { data, isLoading, isError, error } = useGetServices();

  const fileRef = useRef();

  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-[10px]">
      <div className="flex flex-col gap-[20px] items-center w-full"></div>

      <div className="grid grid-cols-1 gap-20 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <CardGrid id={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
