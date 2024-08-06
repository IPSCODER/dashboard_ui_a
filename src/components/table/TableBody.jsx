import React from "react";

const TableBody = ({ data, columns }) => {
  return (
    <>
      {data?.map((row, index) => (
        <tr key={index} className='border-b border-b-primary-200'>
          {columns?.map((column, columnIndex) => {
            const isStatusColumn = column?.key === "status";
            const status = row[column?.key];

            let cellClassName = 'px-6 py-4 text-md';
            if (isStatusColumn) {
              cellClassName += status === "Delivered" ? ' bg-green-900 text-white' : ' bg-red-900 text-white';
            }

            return (
              <td key={columnIndex} className={cellClassName}>
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
