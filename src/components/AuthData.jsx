import { useState, useEffect } from "react";

export function useAuthDataContext(props) {
  let initialData = JSON.parse(localStorage.getItem("AuthData"));
  if (initialData === null || initialData === undefined) {
    initialData = { active: false };
  }
  const [authData, setAuthData] = useState(initialData.active);

  useEffect(() => {
    const currentAuthData = JSON.parse(localStorage.getItem("AuthData"));
    if (currentAuthData) {
      setAuthData(currentAuthData.active);
    }
  }, []);

  const onLogout = () => {
    setAuthData(false);
    localStorage.setItem("AuthData", JSON.stringify({ active: false }));
  };

  const onLogin = () => {
    setAuthData(true);
    localStorage.setItem("AuthData", JSON.stringify({ active: true }));
  };

  return { authData, onLogin, onLogout };
}
