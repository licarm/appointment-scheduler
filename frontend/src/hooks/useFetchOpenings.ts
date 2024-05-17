import { useEffect, useState } from "react";
import { User } from "src/Types";

const useFetchOpenings = (user?: User): any[] => {
  const [openings, setOpenings] = useState<any[]>([]);

  useEffect(() => {
    const fetchOpenings = async () => {
      let data: any[] = [];
      try {
        let res = await fetch(`http://localhost:8080/openings${user ? `?coachId=${user.id}` : ''}`);
        data = await res.json();
      } catch (e) {
        console.log(e);
      }
      setOpenings(data);
    }

    fetchOpenings();
  }, [user, openings]);

  return openings;
};

export default useFetchOpenings;
