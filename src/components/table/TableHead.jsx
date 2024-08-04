import React from "react";


const TableHead = ({ columns, page }) => {

  return (
    <thead className='text-black bg-primary-50 uppercase '>
      <tr className='border-b-2 border-b-gray-200'>
        {columns?.map((column, index) => (
          <React.Fragment key={index}>
            {column.label == "" ? (
              <th scope='col' className='px-6 py-4 whitespace-nowrap '></th>
            ) : (
              <th scope='col' className='px-6 py-4 whitespace-nowrap '>
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