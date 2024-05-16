import { Button } from "@mui/material";
import { ReactNode } from "react";

const TimeSlot = ({ children, onClick }: { children?: ReactNode, onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
};

export default TimeSlot;
