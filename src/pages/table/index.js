import React, { useEffect } from 'react';
import ReactMarkddown from 'react-markdown';
import { Table } from '@es/';
import tabledata from './configs';
import columns from './columns';
import TableMd from './README/table';
import style from './table.style.scss';
import readme from '@/styles/markdown.style.scss';
const TableComponent = (props) => {
  useEffect(() => {
  }, [])
  return <div className={ style.main }>
    <ReactMarkddown children={ TableMd } className={ readme.markdown } />
    {/* <Table 
    className={ style.table }
    columns={columns}
    tabledata={tabledata}></Table> */}
  </div>
}

export default TableComponent;