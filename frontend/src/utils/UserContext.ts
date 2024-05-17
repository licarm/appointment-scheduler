import React from "react";
import { User } from "src/utils/Types";

export const UserContext = React.createContext<User | undefined>(undefined);
