import { useQuery } from "@tanstack/react-query";

import { apiExperinece } from "../service/aboutMe";

function useGetExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: apiExperinece,
  });
}

export default useGetExperience;
