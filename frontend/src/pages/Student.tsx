import { useContext } from "react";
import { Opening } from "src/utils/Types";
import TimeSlot, { SlotContainer } from "src/common-components/TimeSlot";
import useFetchOpenings from "src/hooks/useFetchOpenings";
import { UserContext } from "src/utils/UserContext";

const StudentPage = () => {
  const openings = useFetchOpenings();
  const user = useContext(UserContext);

  return (user
    ? <>
      {user.name} page
      <SlotContainer>
        {openings.map((o: Opening) => {
          return <TimeSlot
            key={o.time + o.user_coach_id}
            status="slot"
            onClick={() => {
              alert('not implemented');
            }}
          >{o.time}</TimeSlot>
        })}
      </SlotContainer>
    </>
    : <>select a user</>
  )
};

export default StudentPage;
