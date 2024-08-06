import React from 'react'
import Table from '../../components/table/Table'
import { tableColunm, tableData } from '../../constants/tabledata'

const Notes = () => {
  return (
    <div className='w-full '>
    <Table data={tableData} columns={tableColunm} />
    </div>
  )
}

export default Notes