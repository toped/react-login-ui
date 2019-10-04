import React from "react";

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent></OriginalComponent>;
        }
    }

    return NewComponent;
};

// Pattern
// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component {
//          render() {
//              return <OriginalComponent></OriginalComponent>
//          }
//     }

//     return NewComponent;
// }

export default UpdatedComponent;
