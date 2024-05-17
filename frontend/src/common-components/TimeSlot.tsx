import { Button } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

const TimeSlot = ({ status = 'open', children, onClick }: {
  status: "slot" | "booked" | "open",
  children?: ReactNode,
  onClick?: () => void
}) => {
  const buttonType = {
    "slot": "outlined",
    "booked": "contained",
    "open": "text",
  }

  let variant = undefined;
  if (status === "open") variant = "text";
  if (status === "booked") variant = 'contained';
  if (status === "slot") variant = 'outlined';

  return (<>
    {status === "open" &&
      <Button variant="text" onClick={onClick}>
        {children}
      </Button>
    }
    {status === "booked" &&
      <Button variant="contained" onClick={onClick}>
        {children}
      </Button>
    }
    {status === "slot" &&
      <Button variant="contained" onClick={onClick}>
        {children}
      </Button>
    }
  </>

  )
};

export const SlotContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 250px;
`;

export default TimeSlot;
