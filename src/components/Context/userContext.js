import React from "react";

const userContext = React.createContext();
const loggedInContext = React.createContext(false);

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

const LoggedInProvider = loggedInContext.Provider;
const LoggedInConsumer = loggedInContext.Consumer;

export {UserProvider, UserConsumer, LoggedInProvider,  LoggedInConsumer}