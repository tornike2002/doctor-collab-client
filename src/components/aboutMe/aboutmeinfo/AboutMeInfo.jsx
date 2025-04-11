import { useGetAboutInfo } from "../../../hook/useGetAboutInfo";
import ErrorMessage from "../../ErrorMessage";
import AboutMeImg from "./AboutMeImg";
import AboutMeSkeleton from "./AboutMeSkeleton";

export default function AboutMeInfo() {
  const { data, isLoading, isError, error } = useGetAboutInfo();

  if (isLoading) return <AboutMeSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;
  return (
    <div className="">
      {data.map((dataHero) => (
        <div key={dataHero.id}>
          <h1 className="text-[42px] font-bold md:text-[52px] lg:text-[64px] font-poppinsBold  text-veryDark mt-[50px] text-center">
            {dataHero.title}
          </h1>
          <AboutMeImg text={dataHero.text} dataHeroImg={dataHero.img} />
        </div>
      ))}
    </div>
  );
}
