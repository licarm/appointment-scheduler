import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs";

const CalendarMonth = ({ onChange }: { onChange: (val: Dayjs) => void }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={(val) => onChange(val)} />
    </LocalizationProvider>
  )
};

export default CalendarMonth;
