import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";


const Table = ({ data, columns, page }) => {

    console.log(data,columns);

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <TableHead columns={columns} page={page} />
          <tbody>
            <TableBody data={data} columns={columns} />
          </tbody>
        </table>
     
    </div>
  );
};

export default Table;