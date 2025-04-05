import { useGetbanner } from "../../../hook/useGetbanner";
import ErrorMessage from "../../ErrorMessage";
import BannerSkeleton from "./BannerSkeleton";

export default function Banner() {
  const { data, error, isError, isLoading } = useGetbanner();
  console.log(data);

  if (isLoading) {
    return <BannerSkeleton />;
  }

  if (isError) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  return (
    <div className="bg-[#CBDEEF] py-[3.81rem] mb-28 px-[3.81rem] mt-[8rem]">
      {data.title.map((banner) => (
        <div
          key={banner.id}
          className="flex justify-between items-center bg-softBlue p-6 rounded-md"
        >
          <div className="text-[4rem]">
            <h1 className="font-extrabold text-[#1A1B1D] text-[25px] lg:text-[40px] w-[200px] lg:w-[700px]">
              {banner.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
