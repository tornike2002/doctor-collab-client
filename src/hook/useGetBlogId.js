import { useQuery } from "@tanstack/react-query";

import { getBlogId } from "../service/blog";

export const useGetBlogId = (id) => {
  return useQuery({
    queryKey: ["doctor_blog", id],
    queryFn: () => getBlogId(id),
    enabled: !!id,
  });
};
