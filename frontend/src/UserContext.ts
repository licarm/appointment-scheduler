import React from "react";
import { User } from "src/UserTypes";

export const UserContext = React.createContext<User | null>(null);
