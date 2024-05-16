import { Dayjs } from "dayjs";

const createOpening = async (coachId: string, time: Dayjs) => {
  if (coachId === '') return false;

  let res;
  try{

    res = await fetch(`http://localhost:8080/openings`, {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        coachId,
        time: time.toString(),
      })
    });
    if (res.ok) return true;
  } catch (e) {
    console.log(e);
  }

  return false;
};

export default createOpening;
