import { useGetDaysOfWeek } from "../../hook/useGetDaysOfWeek";
import { useState } from "react";
import { useGetPatientsByDate } from "../../hook/useGetPatientsByDate";
import TimeLOading from "./TimeLOading";
import ErrorMessage from "../ErrorMessage";

function AvailableTime({ formatDate, selectedDay, setTimeId }) {
  const {
    data: daysOfWeek,
    isLoading: patientsByDateLoading,
    isError: patientsByDateError,
  } = useGetDaysOfWeek(selectedDay);
  const {
    data: patientsByDateData,
    isLoading: weekLoading,
    isError: weekIsError,
  } = useGetPatientsByDate(formatDate);
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/^0/, "");
  };
  const patientsByDate = Array.isArray(patientsByDateData)
    ? patientsByDateData
    : patientsByDateData?.data || [];

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const checkIfTimeIsAvailable = (timeSlot) => {
    return patientsByDate.find((time) => time.avaliable_time === timeSlot);
  };
  const handleTimeSlotClick = (id) => {
    setTimeId(id);
    setSelectedTimeSlot(id);
  };

  if (patientsByDateLoading || weekLoading) return <TimeLOading />;
  if (patientsByDateError || weekIsError)
    return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      <div className="flex w-full gap-4 items-center justify-between flex-wrap mt-10 mb-4">
        {daysOfWeek.map((timeSlot) => (
          <button
            key={timeSlot.id}
            name={`${formatTime(timeSlot.start_time)} - ${formatTime(
              timeSlot.end_time
            )}`}
            type="button"
            disabled={checkIfTimeIsAvailable(timeSlot.id)}
            onClick={() => handleTimeSlotClick(timeSlot.id)}
            className={`transition-all duration-300 ease-in-out transform ${
              checkIfTimeIsAvailable(timeSlot.id)
                ? "bg-gray-400 text-white cursor-not-allowed"
                : selectedTimeSlot === timeSlot.id
                ? "bg-blue-700 text-white scale-105"
                : "bg-blue-400 hover:scale-105 hover:bg-blue-500 hover:text-white active:scale-95"
            } px-6 sm:px-10 py-3 sm:py-4 rounded-[3.5rem] text-base sm:text-lg font-semibold shadow-lg`}
          >
            {formatTime(timeSlot.start_time)} - {formatTime(timeSlot.end_time)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AvailableTime;
