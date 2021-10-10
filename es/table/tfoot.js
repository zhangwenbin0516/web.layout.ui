import React from "react";

const Tfoot = (props) => {
    if (props.footer === false) {
        return null;
    } else {
        return React.createElement('tfoot');
    }
}

export default Tfoot;