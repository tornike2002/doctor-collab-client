import AboutMeExperience from "../components/aboutMe/AboutMeExperience/AboutMeExperience";
import AboutMeInfo from "../components/aboutMe/aboutmeinfo/AboutMeInfo";
import AboutMeAwards from "../components/aboutMe/awards/AboutMeAwards";
import AboutMeEducation from "../components/aboutMe/education/AboutMeEducation";
import AboutMeSkil from "../components/aboutMe/skills/AboutMeSkil";



export default function AboutMe() {
  return (
    <div className="px-[30px]">
      <AboutMeInfo />
      <AboutMeExperience />
      <AboutMeEducation />
      <AboutMeSkil />
      <AboutMeAwards />
    </div>
  );
}
