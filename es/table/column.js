import React, { useContext } from "react";
import { TableContext } from './hooks';

function Column(props) {
    if (props.type === 'thead') {
        return props.columns.map((item, index) => {
            return React.createElement('th', {
                key: index
            }, [])
        })
    } else {
        return props.columns.map((item, index) => {
            return React.createElement('td', {
                key: index
            }, [])
        })
    }
}

export default Column;