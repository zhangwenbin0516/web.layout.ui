import React, { useEffect, useContext } from "react";
import { TableContext } from "./hooks";
import ColumnGroup from './columnGroup';

const Thead = () => {
    const { columns, headers, header, dispatch } = useContext(TableContext);
    useEffect(() => {
        onRow()
    }, [columns, headers])
    function onRow() {
        let row = (headers || {}).row || 1;
        let rows = [];
        for(let i=0; i<row; i++) {
            let cols = {};
            (columns || []).filter(item => {
                if (item.children && item.children[i]) {
                    cols[item.key || 'editor'] = item.children[i];
                } else {
                    cols[item.key || 'editor'] = item.title;
                }
            })
            rows.push(cols);
        }
        dispatch({
            type: 'head',
            data: rows
        })
    }
    if (header === false) {
        return null;
    } else {
        return React.createElement('thead', {}, [((headers || {}).lists || []).map((items, index) => {
            return <ColumnGroup key={ index } type="thead" columns={ items } />
        })]);
    }
}

export default Thead;