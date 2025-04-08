import Frame from "/imgs/Frame.png";

import circleIcon from "/imgs/cir.png";
import useGetExperience from "../../../hook/useGetExperience";
import ExperienceMap from "./ExperienceMap";
import ErrorMessage from "../../ErrorMessage";
import ExperienceSkeleton from "./ExperienceSkeleton";

export default function AboutMeExperience() {
  const { data, error, isLoading, isError } = useGetExperience();
  if (isLoading) return <ExperienceSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;
  return (
    <div className="mt-[20px]  flex  flex-col gap-[10px]">
      <h1 className=" text-[40px]  font-bold ">Experience</h1>
      {data.map((item) => (
        <div key={item.id}>
          <ExperienceMap item={item} Frame={Frame} circleIcon={circleIcon} />
        </div>
      ))}
    </div>
  );
}
