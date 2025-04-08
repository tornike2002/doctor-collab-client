import AwardsSkeleot from "./AwardsSkeleot";
import ErrorMessage from "../../ErrorMessage";
import { useGetAwards } from "../../../hook/useGetAwards";
import AwardsMap from "./AwardsMap";
import Frame from "/imgs/Frame.png";

import cir from "/imgs/cir.png";
export default function AboutMeAwards() {
  const { data, isError, isLoading, error } = useGetAwards();

  if (isLoading) return <AwardsSkeleot />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="awards-section">
      <h1 className="text-[40px] font-bold">Awards</h1>
      {data.map((item) => (
        <div key={item.id}>
          <AwardsMap Frame={Frame} circleIcon={cir} item={item} id={item.id} />
        </div>
      ))}
    </div>
  );
}
