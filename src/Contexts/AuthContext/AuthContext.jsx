import React, { createContext, useContext, useEffect, useState } from "react";

import { storageAvailable } from "./StorageAvailablity";
const Cookies = require("js-cookie");

export const parseUserFromStorage = () => {
  const user = localStorage.getItem(storageKey);
  if (user) {
    const parsedUser = JSON.parse(user);
    return parsedUser;
  }
  return undefined;
};

const AuthContext = createContext({
  currentUser: undefined,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
  notif: undefined,
  setNotif: async () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const storageKey = "theCurrentUserSavedInLocalStorage";
const cookieKey = "testing",
  True = "true",
  False = "false";
export const loadUserFromStorage = () => {
  if (storageAvailable()) {
    const parsedUser = parseUserFromStorage();
    if (parsedUser === undefined) {
      return undefined;
    }
    const currentSession = Cookies.get(cookieKey);
    if (currentSession !== undefined && parsedUser.token) {
      return parsedUser;
    }
    if (parsedUser.remember && parsedUser.token) {
      Cookies.set(cookieKey, True);
      return parsedUser;
    } else {
      localStorage.removeItem(storageKey);
      return undefined;
    }
  } else {
    //storage not available, what to do?
  }
  return undefined;
};

const saveUserToStorage = (user, key = storageKey) => {
  Cookies.set(cookieKey, True);
  localStorage.setItem(key, JSON.stringify(user));
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return loadUserFromStorage();
  });
  const [notif, setNotif] = useState(undefined);

  const signup = async () => {};
  const login = async (username, password, remember) => {
    //const res = await loginAPI(username, password, false);
    const res = { success: true, token: "token" };
    if (res.success && res.token) {
      const user = {
        token: res.token,
        firstname: username,
        lastname: username,
        remember: remember,
      };
      saveUserToStorage(user);
      setCurrentUser(user);
      return { ...res, token: undefined }; //undefined for security reasons
    } else {
      return res;
    }
  };

  const logout = async () => {
    //await logOutAPI();
    localStorage.removeItem(storageKey);
    Cookies.remove(cookieKey);
    setCurrentUser(undefined);
  };

  const value = {
    currentUser,
    logout,
    login,
    signup,
    notif,
    setNotif,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
