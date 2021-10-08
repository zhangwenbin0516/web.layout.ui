/**
 * @table 表格功能
 */
import React from 'react';
import Row from './row';
import RowGroup from './rowGroup';
import Column from './column';
import ColumnGroup from './columnGroup';

const Table = (props) => {
    console.log(props)
    return React.createElement('div');
}
Table.Column = Column;
Table.ColumnGroup = ColumnGroup;
Table.Row = Row;
Table.Row = RowGroup;
Table.defaultprops = {
    rowKey: 'key'
}
export default Table;