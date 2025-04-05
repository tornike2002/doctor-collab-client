import DoctorInfo from "./DoctorInfo";
import { useGetDoctorBio } from "../../../hook/useGetDoctorBio";
import DoctorBioSkeleton from "./DoctorBioSkeleton";

function DoctorBio() {
  const { data: doctorimg, isLoading, isError } = useGetDoctorBio();

  if (isLoading) {
    return <DoctorBioSkeleton />;
  }

  if (isError) {
    return <div>Error loading doctor information.</div>;
  }

  return (
    <div className="grid grid-cols-1 pb-10 pt-10">
      {doctorimg.full_name.map((doctor) => (
        <div key={doctor.id}>
          <DoctorInfo
            img={doctor.img}
            full_name={doctor.full_name}
            job_description={doctor.job_description}
            job_code={doctor.job_code}
            id={doctor.id}
          />
        </div>
      ))}
    </div>
  );
}

export default DoctorBio;
