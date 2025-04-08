import Frame from "/imgs/Frame.png";

import cir from "/imgs/cir.png";

import ErrorMessage from "../../ErrorMessage";
import Skeleton from "./Skeleton";
import useGetEducation from "../../../hook/useGetEducation";
import EducationMap from "./EducationMap";

export default function AboutMeEducation() {
  const { data, error, isLoading, isError } = useGetEducation();

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="mt-[20px] flex flex-col gap-[10px]">
      <h1 className="text-[40px] font-bold">Education</h1>
      {data.map((item) => (
        <div key={item.id}>
          <EducationMap
            item={item}
            Frame={Frame}
            id={item.id}
            circleIcon={cir}
          />
        </div>
      ))}
    </div>
  );
}
