import React from 'react';
import Table from '@es/table';
import tabledata from './configs';
import columns from './columns';

const TableComponent = (props) => {
  console.log(props)
  return <Table columns={columns} tabledata={tabledata}></Table>
}

export default TableComponent;