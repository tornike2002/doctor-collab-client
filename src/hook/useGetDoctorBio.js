import { useQuery } from "@tanstack/react-query";
import { apiGetDoctorBio } from "../service/home";

export const useGetDoctorBio = () => {
  return useQuery({
    queryKey: ["doctor_info"],
    queryFn: apiGetDoctorBio,
  });
};
