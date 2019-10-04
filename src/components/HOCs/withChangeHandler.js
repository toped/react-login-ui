import React from "react";

const InputFieldWithHandler = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                value: ""
            };

            this.onChangeHandler = this.onChangeHandler.bind(this);
        }

        onChangeHandler = e => {
            const value = e.target.value;

            this.setState(
                {
                    value: value
                },
                () => {
                    this.props.inputChangeHandler(value);
                    console.log(value);
                }
            );
        };

        render() {
            return (
                <OriginalComponent
                    changeHandler={this.onChangeHandler}
                    value={this.state.value}
                    {...this.props}
                ></OriginalComponent>
            );
        }
    }

    return NewComponent;
};

export default InputFieldWithHandler;
