import React from "react";


const TableHead = ({ columns, page }) => {

  return (
    <thead className='text-black bg-[#111] uppercase '>
      <tr className='border-b-2'>
        {columns?.map((column, index) => (
          <React.Fragment key={index}>
            {column.label == "" ? (
              <th scope='col' className='px-6 py-4 whitespace-nowrap text-white'></th>
            ) : (
              <th scope='col' className='px-6 py-4 whitespace-nowrap text-white'>
                {column.label}
              </th>
            )}
          </React.Fragment>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;