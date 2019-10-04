import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputField from "../InputFields/InputField";

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    updateInputValue(name, value) {
        this.setState({
            [name]: value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        console.log("Sign in form:", this.state);
    };

    render() {
        return (
            <>
                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.submitHandler}>
                        <div className="FormField">
                            <InputField
                                label="E-Mail Address"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                inputChangeHandler={this.updateInputValue}
                            ></InputField>
                        </div>

                        <div className="FormField">
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                inputChangeHandler={this.updateInputValue}
                            ></InputField>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">
                                Sign In
                            </button>{" "}
                            <Link to="/" ƒ="FormField__Link">
                                Create an account
                            </Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignInForm;
