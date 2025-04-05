import { useQuery } from "@tanstack/react-query";

import { apiGetServices } from "../service/home";

export const useGetServices = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => apiGetServices(id),
  });
};
