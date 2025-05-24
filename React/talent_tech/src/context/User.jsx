import { createContext, useState, useEffect } from "react";

export const User = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <User.Provider value={{ user, fetchRandomUser }}>{children}</User.Provider>
  );
};
