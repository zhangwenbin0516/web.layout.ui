import React from "react";
import Column from "./column";

function ColumnGroup(props) {
    console.log(props)
    return React.createElement('tr', {
        key: 'tr'
    }, [<Column key={props.type} type={props.type} columns={ props.columns || [] } />])
}

export default ColumnGroup;