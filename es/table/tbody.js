import React from "react";

const Tbody = (props) => {
    if (props.footer === false) {
        return null;
    } else {
        return React.createElement('tbody');
    }
}

export default Tbody;