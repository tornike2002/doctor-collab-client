import { useQuery } from "@tanstack/react-query";

import { getPatientsByDate } from "../service/Bookin";

export const useGetPatientsByDate = (formattedDate) => {
  return useQuery({
    queryFn: () => getPatientsByDate(formattedDate), // <-- Remove the argument from here
    queryKey: ["patientsByDate", formattedDate], // <-- Include date in the queryKey
    enabled: !!formattedDate,
  });
};
