import React, { useReducer } from "react";

const initState = {
    columns: [],
    tableData: [],
    headers: {},
    footers: {},
    pages: {},
    className: ''
}

class Table {
    constructor() {
        this.head = this.head.bind(this);
        this.init = this.init.bind(this);
    }
    head() {
        console.log(this)
    }
    init(state = initState, action) {
        if (action.type && this[action.type]) {
            this.state = state;
            this.data = action;
            this[action.type](state, action.data);
            return this.state;
        } else {
            return state;
        }
    }
}
const reducer = new Table();

export const TableContext = React.createContext(initState);

export const TableComponent = (props) => {
    const [state, dispatch] = useReducer(reducer.init, props.values);
    return <TableContext.Provider key='table' value={{ ...state, dispatch }}>
        { props.children }
    </TableContext.Provider>
}