import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { CalendarIcon } from '@heroicons/react/24/outline';

const DatePicker = ({ selectedDate, onDateChange }) => {
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

  const handleDate = (day) => {
    onDateChange(day);
    setOpen(false);
  };

  const handleYearChange = (e) => {
    const year = Number(e.target.value);
    setSelectedYear(year);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month.getMonth());
    setCurrentMonth(month);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const initialMonth = new Date(selectedYear, selectedMonth);

  const dayPickerStyle = {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '4px',
    padding: '10px'
  };
  
  const selectedStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
  };

  return (
    <div className="relative">
      <input
        className="px-4 block w-1/2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        type="text"
        readOnly
        placeholder="DD-MM-YYYY"
        value={selectedDate ? formatDate(selectedDate) : ""}
        onClick={() => setOpen(!open)}
      />
      <CalendarIcon className="absolute inset-y-0 right-42 left-20 top-3 w-16 h-5 text-gray-500 pointer-events-none" />
      {open && (
        <div className="absolute w-1/2 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-5">
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
          style={dayPickerStyle}
            selected={selectedDate}
            onDayClick={handleDate}
            month={initialMonth}
            onMonthChange={handleMonthChange}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
