import { useQuery } from "@tanstack/react-query";

import { apiGetBlogAdd } from "../service/blog";

export const useGetBlogAdd = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: apiGetBlogAdd,
  });
};
