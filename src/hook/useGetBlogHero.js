import { useQuery } from "@tanstack/react-query";

import { apiGetBlogHero } from "../service/blog";

function useGetBlogHero() {
  return useQuery({
    queryKey: ["about_hero"],
    queryFn: apiGetBlogHero,
  });
}

export default useGetBlogHero;
