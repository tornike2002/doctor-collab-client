import { useRef, useState } from "react";
import BookingTop from "./BookingTop";
import PersonalForm from "./PersonalForm";
import BookingCalendar from "./BookingCalendar";
import AvailableServices from "./AvailableServices";
import AvailableTime from "./AvailableTime";
import { useAddPatient } from "../../hook/useAddPatient";
import { toast } from "react-toastify";

export default function BookinMain() {
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);
  const [formatDate, setFormatDate] = useState(null);
  const [timeId, setTimeId] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [timeError, setTimeError] = useState(false);
  const [servicesError, setServicesError] = useState(false);

  const dayIndex = (date.getDay() + 7) % 7;
  const formRef = useRef(null);
  const { mutate: addPatient } = useAddPatient();

  const errorFrom = () => {
    const form = formRef.current;
    if (!form) return false;

    const errors = {};

    if (!form.user_name.value) errors.user_name = "Name is required";
    if (!form.user_email.value) errors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.user_email.value))
      errors.user_email = "Email is invalid";
    if (!form.user_phone.value) errors.user_phone = "Phone is required";
    else if (!/^\d{9}$/.test(form.user_phone.value))
      errors.user_phone = "Phone must be 9 digits";
    if (!form.age.value) errors.age = "Age is required";
    else if (
      isNaN(form.age.value) ||
      form.age.value < 1 ||
      form.age.value > 100
    )
      errors.age = "Age must be between 1 and 120";
    if (!form.condition.value) errors.condition = "Condition is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const isFormValid = errorFrom();

    if (!isFormValid) {
      toast.error("Please fix the errors in the form.");
      isValid = false;
    }

    if (!timeId) {
      setTimeError(true);
      toast.error("Please select a time.");
      isValid = false;
    } else {
      setTimeError(false);
    }

    if (!selectedService?.name) {
      setServicesError(true);
      toast.error("Please select a service.");
      isValid = false;
    } else {
      setServicesError(false);
    }

    if (!isValid) return;

    const formData = new FormData(formRef.current);
    const formattedDate = date.toISOString().split("T")[0];

    const patient = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      age: formData.get("age"),
      condition: formData.get("condition"),
      date: formattedDate,
      status: "Pending",
      price: selectedService?.price,
      procedure: selectedService?.name,
      avaliable_time: timeId,
    };

    addPatient(patient);
    formRef.current.reset();
    setDate(new Date());
    setSelectedService(null);
    setFormErrors({});
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="mb-20" noValidate>
        <BookingTop />
        <div className="px-8 sm:px-12 md:px-16">
          <div className="mt-[150px]">
            <h1 className="font-bold text-[50px]">Services For My Patients</h1>
            <PersonalForm errors={formErrors} />
          </div>
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-6 justify-between my-16">
            <BookingCalendar
              date={date}
              setDate={setDate}
              setFormatDate={setFormatDate}
            />
            <AvailableServices
              date={date}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              hasError={servicesError}
            />
          </div>
          <AvailableTime
            setTimeId={setTimeId}
            selectedDay={dayIndex}
            formatDate={formatDate}
            hasError={timeError}
          />
        </div>
        <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="w-full max-w-[400px] mt-[20px]   cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
