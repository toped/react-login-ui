import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputField from "../InputFields/InputField";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            password: "",
            email: ""
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
        console.log("Sign up form:", this.state);
    };

    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.submitHandler}>
                    <div className="FormField">
                        <InputField
                            label="Full Name"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
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
                        <label className="FormField__CheckboxLabel">
                            <input
                                className="FormField__Checkbox"
                                type="checkbox"
                                name="hasAgreed"
                            />{" "}
                            I agree all statements in{" "}
                            <Link to="/terms" className="FormField__TermsLink">
                                terms of service
                            </Link>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">
                            Sign Up
                        </button>{" "}
                        <Link to="/sign-in" className="FormField__Link">
                            I'm already member
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
