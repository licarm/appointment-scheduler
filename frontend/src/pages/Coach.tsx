import { Dayjs } from 'dayjs';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "src/utils/UserContext";
import createOpening from 'src/actions/createOpening';
import CalendarMonth from "src/common-components/CalendarMonth";
import TimeSlot from "src/common-components/TimeSlot";
import { dayjs } from 'src/utils/timezone';
import { Opening } from 'src/Types';
import { styled } from 'styled-components';


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
      <CoachPageContainer>
        <div>
          Here are the slots you've already added.
          <SlotContainer>
            {openings.map((o: Opening) => {
              return <TimeSlot status="slot">{o.time}</TimeSlot>
            })}
          </SlotContainer>
          {/* Here are your upcoming appointments. */}
        </div>
        <div>
          Click a time to add a 2 hour slot!
          <CalendarMonth onChange={(val) => setDate(val)} />
          {
            slots(date).map((slot) => {
              const openingExists = openings.find((o: Opening) => {
                // console.log(slot, o, o.user_coach_id === user?.id)
                // console.log(o.user_coach_id, user?.id, o.user_coach_id === user?.id)

                return slot.isSame(o.time) && o.user_coach_id === user?.id
              });
              if (openingExists) {
                return <></>;
              }

              return (
                <TimeSlot
                  status="open"
                  key={slot.toString()}
                  onClick={async () => {
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
        </div>
      </CoachPageContainer>

    </>
  )
};

const CoachPageContainer = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
`;

const SlotContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 250px;
`;

export default CoachPage;
