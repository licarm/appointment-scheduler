import React from "react";
import { User } from "src/Types";

export const UserContext = React.createContext<User | undefined>(undefined);
