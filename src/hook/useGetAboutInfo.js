import { useQuery } from "@tanstack/react-query";

import { apiAboutInfo } from "../service/aboutMe";

export const useGetAboutInfo = () => {
  return useQuery({
    queryKey: ["about_info"],
    queryFn: apiAboutInfo,
  });
};
