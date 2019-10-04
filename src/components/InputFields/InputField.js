import React, { Component } from "react";

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState(
            {
                value: value
            },
            () => {
                this.props.inputChangeHandler(name, value);
            }
        );
    };

    render() {
        const {
            label,
            type,
            name,
            id,
            placeholder,
        } = this.props;

        return (
            <div>
                <label className="FormField__Label" htmlFor={name}>
                    {label}
                </label>
                <input
                    type={type}
                    id={id}
                    className="FormField__Input"
                    placeholder={placeholder}
                    name={name}
                    onChange={this.onChangeHandler}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default InputField;
