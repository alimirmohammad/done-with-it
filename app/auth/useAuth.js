import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const login = async (authToken) => {
    await authStorage.storeToken(authToken);
    const user = jwtDecode(authToken);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { login, logout, user };
}
