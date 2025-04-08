import { useQuery } from "@tanstack/react-query";

import { apiGetEducation } from "../service/aboutMe";

function useGetEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: apiGetEducation,
  });
}

export default useGetEducation;
