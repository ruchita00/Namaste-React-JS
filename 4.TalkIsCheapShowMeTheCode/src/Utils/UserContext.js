import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default context",
});

export default UserContext;
