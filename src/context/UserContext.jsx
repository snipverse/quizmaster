import { useState } from "react";
import { UserContext } from "./userContextInstance";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Smaran",
    email: "SmaranAI@example.com",
    role: "Instructor",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
