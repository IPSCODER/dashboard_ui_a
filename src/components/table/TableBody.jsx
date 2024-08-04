import React from "react";


const TableBody = ({ data, columns }) => {

  return (
    <>
      {data?.map((row, index) => (
        <tr key={index} className='border-b border-b-primary-200'>
          {columns?.map((column, columnIndex, columnData) => {
            return (
              <td key={columnIndex} className='px-6 py-4 text-md'>
            {row[column?.key]}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

export default TableBody;