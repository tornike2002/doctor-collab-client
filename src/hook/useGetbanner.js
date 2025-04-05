import { useQuery } from "@tanstack/react-query";

import { apiGetBanner } from "../service/home";

export const useGetbanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: apiGetBanner,
  });
};
