import { useContext } from "react";
import { UserContext } from "../context/userContextInstance";

export const useUser = () => useContext(UserContext);
