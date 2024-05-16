import { Dayjs } from 'dayjs';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "src/utils/UserContext";
import createOpening from 'src/actions/createOpening';
import CalendarMonth from "src/common-components/CalendarMonth";
import TimeSlot from "src/common-components/TimeSlot";
import { dayjs } from 'src/utils/timezone';


const slots = (date: Dayjs) => [
  dayjs.tz(date).hour(8).minute(0).second(0),
  dayjs.tz(date).hour(10).minute(0).second(0),
  dayjs.tz(date).hour(12).minute(0).second(0),
  dayjs.tz(date).hour(14).minute(0).second(0),
];

const CoachPage = () => {
  const [date, setDate] = useState(dayjs());
  const [openings, setOpenings] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    const fetchOpenings = async () => {
      let data
      try {
        let res = await fetch(`http://localhost:8080/openings${user ? `?coachId=${user.id}` : ''}`);
        data = await res.json();
      } catch (e) {
        console.log(e);
      }
      setOpenings(data);
    }

    fetchOpenings();
  }, []);

  return (
    <>
      {user?.name || 'missing user'}'s page
      <CalendarMonth onChange={(val) => setDate(val)} />
      {
        slots(date).map((slot) => {
          return (
            <TimeSlot
              key={slot.toString()}
              onClick={async () => {
                console.log(1)
                const result = await createOpening(user?.id || '', slot);

                if (result) {
                  alert('Yay! A slot was added on ' + slot.toString());
                } else {
                  alert('Whoops! Something went wrong.')
                }
              }}>
              {slot.format('hh:mm').toString()}
            </TimeSlot>
          );
        })
      }
    </>
  )
};

export default CoachPage;
