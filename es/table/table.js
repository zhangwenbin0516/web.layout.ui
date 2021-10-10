import React from "react";
import Thead from './thead';
import Tbody from './tbody';
import Tfoot from './tfoot';
import Pagination from './pagination';
import style from './table.style.scss';

const Table = (props) => {
    return React.createElement('table', {
        className: props.className || style.table
    }, [
            <Thead key="thead" />,
            <Tbody key="tbody" />,
            <Tfoot key="tfoot" />,
            <Pagination key="pagination" />
    ]);
}

export default Table;