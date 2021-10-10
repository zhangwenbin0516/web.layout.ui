/**
 * @table 表格功能
 */
import React from 'react';
import TableContent from './table';
import Column from './column';
import ColumnGroup from './columnGroup';

import { TableComponent } from './hooks';


const Table = (props) => {
    return React.createElement(TableComponent, {
        key: 'hooks',
        values: { ...props },
    }, [
        <TableContent key="table" />
    ]);
}
Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.defaultprops = {
    rowKey: 'key'
}
export default Table;