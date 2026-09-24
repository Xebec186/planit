import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";

import "react-datepicker/dist/react-datepicker.css";

function DateInput({ value, onChange, label = "Event Date" }) {
  // Convert "YYYY-MM-DD" string prop to JavaScript Date object
  const dateValue = value ? new Date(`${value}T00:00:00`) : null;

  const handleDateChange = (date) => {
    if (!date) {
      onChange("");
      return;
    }

    // format date object back to "YYYY-MM-DD" string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    onChange(`${year}-${month}-${day}`);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor="event-date"
          className="block text-sm font-semibold text-planit-heading"
        >
          Event date
        </label>
      )}

      <div className="relative w-full">
        <FiCalendar
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 z-10 text-black/80"
        />

        <DatePicker
          id="event-date"
          selected={dateValue}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="YYYY-MM-DD"
          minDate={new Date()}
          isClearable
          wrapperClassName="w-full"
          className="w-full rounded-lg border border-planit-border bg-planit-surface py-3 pl-10 pr-4 text-md outline-none transition-colors focus:border-planit-primary placeholder:text-planit-text-muted"
        />
      </div>
    </div>
  );
}

export default DateInput;
