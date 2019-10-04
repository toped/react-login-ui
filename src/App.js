import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Component Imports
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Terms from "./components/Terms/Terms";
import { UserProvider } from "./components/Context/userContext";

function App() {
    return (
        <Router basename="/">
            <UserProvider value="Tope">
                <div className="App">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 App__Aside"></div>
                            <div className="col-md-6 App__Form">
                                <div className="PageSwitcher">
                                    <NavLink
                                        to="/sign-in"
                                        activeClassName="PageSwitcher__Item--Active"
                                        className="PageSwitcher__Item"
                                    >
                                        Sign In
                                    </NavLink>
                                    <NavLink
                                        exact
                                        to="/"
                                        activeClassName="PageSwitcher__Item--Active"
                                        className="PageSwitcher__Item"
                                    >
                                        Sign Up
                                    </NavLink>
                                </div>
                                <div className="FormTitle">
                                    <NavLink
                                        to="/sign-in"
                                        activeClassName="FormTitle__Link--Active"
                                        className="FormTitle__Link"
                                    >
                                        Sign In
                                    </NavLink>{" "}
                                    or{" "}
                                    <NavLink
                                        exact
                                        to="/"
                                        activeClassName="FormTitle__Link--Active"
                                        className="FormTitle__Link"
                                    >
                                        Sign Up
                                    </NavLink>
                                </div>
                                <Route
                                    exact
                                    path="/"
                                    component={SignUpForm}
                                ></Route>
                                <Route
                                    path="/sign-in"
                                    component={SignInForm}
                                ></Route>
                                <Route path="/terms" component={Terms}></Route>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </UserProvider>
        </Router>
    );
}

export default App;
