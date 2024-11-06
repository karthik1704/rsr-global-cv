import React, { useState, useEffect, forwardRef } from "react";
import { DayPicker, getDefaultClassNames} from "react-day-picker";
import { CalendarIcon } from '@heroicons/react/24/outline';


type Props = {
  selectedDate: Date |undefined;
  onDateChange: (date: Date) => void;
}

const DatePicker = forwardRef<HTMLDivElement, Props>(({ selectedDate, onDateChange }, ref) => {
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(
    selectedDate ? selectedDate.getFullYear() : new Date().getFullYear()
  );
  const [selectedMonth, setSelectedMonth] = useState(
    selectedDate ? selectedDate.getMonth() : new Date().getMonth()
  );

  const [currentMonth, setCurrentMonth] = useState(
    selectedDate
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth())
      : new Date()
  );

  useEffect(() => {
    setCurrentMonth(new Date(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  const handleDate = (day: Date) => {
    onDateChange(day);
    setOpen(false);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = Number(e.target.value);
    setSelectedYear(year);
  };

  const handleMonthChange = (month:Date) => {
    setSelectedMonth(month.getMonth());
    setCurrentMonth(month);
  };

  const formatDate = (date:Date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 70 }, (_, i) => currentYear - i);

  const initialMonth = new Date(selectedYear, selectedMonth);

  const defaultClassNames = getDefaultClassNames();

  const dayPickerStyle = {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '4px',
    padding: '10px',
  };
  
  const selectedStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const monthCaptionStyle = {
    borderBottom: "1px solid currentColor",
    paddingBottom: "0.5em",
  };

  return (
    <div className="relative" ref={ref}>
      <input
        className="px-4 block w-64 lg:w-full md:w-10/12 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        type="text"
        readOnly
        placeholder="DD-MM-YYYY"
        value={selectedDate ? formatDate(selectedDate) : ""}
        onClick={() => setOpen(!open)}
      />
<CalendarIcon 
  className="absolute md:right-24 right-28 lg:right-3 w-5 top-2 bg-transparent border-0 cursor-pointer"
/>
      {open && (
        <div className="absolute w-full lg:w-full md:w-10/12 xl:w-11/12 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-5">
          <select
            value={selectedYear}
            onChange={handleYearChange}
             className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm bg-white shadow-sm mb-4"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <DayPicker
          mode="single"
          classNames={{
            today: `border-green-500`, // Add a border to today's date
            selected: `bg-green-500 border-green-500 text-white`, // Highlight the selected day
            root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
            chevron: `${defaultClassNames.chevron} fill-green-500`, // Change the color of the chevron
            day: 'w-10 h-10 text-center',
          }}
          style={dayPickerStyle}
            selected={selectedDate}
            onDayClick={handleDate}
            month={initialMonth}
            onMonthChange={handleMonthChange}
            styles={{
              month_caption: monthCaptionStyle,
            }}
          />
        </div>
      )}
    </div>
  );
});

DatePicker.displayName = "DatePicker";
export default DatePicker;
