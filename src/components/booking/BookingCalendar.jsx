import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../CalendarStyles.css";
import AvailableServices from "./AvailableServices";
function BookingCalendar({ date, setDate, setFormatDate }) {
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const formattedDate = newDate.toISOString();
    setFormatDate(formattedDate);
  };

  const disablePastDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  return (
    <div>
      <div className="mt-6">
        <h1 className="font-bold text-[40px] p-[5px]">Calendar</h1>
        <div className="mt-10">
          {" "}
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="custom-calendar"
            tileDisabled={disablePastDates}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingCalendar;
