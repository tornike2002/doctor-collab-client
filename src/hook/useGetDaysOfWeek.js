import { useQuery } from "@tanstack/react-query";
import { getDaysOfWeek } from "../service/Bookin";

export const useGetDaysOfWeek = (week_day) => {
  return useQuery({
    queryKey: ["daysOfWeek", week_day],
    queryFn: () => getDaysOfWeek(week_day),
  });
};
