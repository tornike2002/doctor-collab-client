import { useQuery } from "@tanstack/react-query";

import { apiGetFooter } from "../service/home";

export const useGetFooter = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: apiGetFooter,
  });
};
