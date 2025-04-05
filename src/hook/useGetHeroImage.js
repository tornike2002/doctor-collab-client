import { useQuery } from "@tanstack/react-query";

import { apiGetHeroImage } from "../service/home";

export const useGetHeroImage = () => {
  return useQuery({
    queryKey: ["heroImage"],
    queryFn: apiGetHeroImage,
  });
};
