import { useQuery } from "@tanstack/react-query";

import { getAwards } from "../service/aboutMe";

export const useGetAwards = () => {
  return useQuery({
    queryKey: ["awards"],
    queryFn: getAwards,
  });
};
