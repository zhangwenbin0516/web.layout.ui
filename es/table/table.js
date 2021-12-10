import React from "react";
import Thead from './thead';
import Tbody from './tbody';
import Tfoot from './tfoot';

import style from './table.style.scss';

const Table = (props) => {
    return React.createElement('table', {
        className: props.className || style.table
    }, [
        <Thead key="thead" />,
        <Tbody key="tbody" />,
        <Tfoot key="tfoot" />,
    ]);
}

export default Table;