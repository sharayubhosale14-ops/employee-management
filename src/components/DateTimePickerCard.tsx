import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function DateTimePickerCard() {
  const [date, setDate] =
    useState<Dayjs | null>(dayjs());

  const [time, setTime] =
    useState<Dayjs | null>(dayjs());

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Date & Time Management
      </h2>

      <LocalizationProvider
        dateAdapter={AdapterDayjs}
      >
        
        <div className="grid md:grid-cols-2 gap-6">

          <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) =>
              setDate(newValue)
            }
          />

          <TimePicker
            label="Select Time"
            value={time}
            onChange={(newValue) =>
              setTime(newValue)
            }
          />

        </div>
      </LocalizationProvider>

      <div className="mt-6 bg-slate-100 p-4 rounded-lg">
        <p>
          Selected Date:
          {" "}
          {date?.format(
            "DD-MM-YYYY"
          )}
        </p>

        <p>
          Selected Time:
          {" "}
          {time?.format(
            "hh:mm A"
          )}
        </p>
      </div>
    </div>
  );
}

export default DateTimePickerCard;