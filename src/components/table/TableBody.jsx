import React from "react";


const TableBody = ({ data, columns }) => {

  return (
    <>
      {data?.map((row, index) => (
        <tr key={index} className='border-b border-b-primary-200'>
          {columns?.map((column, columnIndex, columnData) => {

            const statusDelivered = column?.key == "status";
 
            const statusUndelivered = column?.status == "status"&& row["status"] == "Pending" 

            console.log(row["status"] == "Pending" );
            


            if (statusDelivered) {
              return (
                <td key={columnIndex} className='px-6 py-4 text-md'>
              <span className={`bg-green-900 px-2 py-1 rounded-md`} >{row[column?.key]}</span>
                </td>
              );
            }else if(statusUndelivered){
              return (
                <td key={columnIndex} className='px-6 py-4 text-md'>
              <span className={`bg-red-900 px-2 py-1 rounded-md`} >{row[column?.key]}</span>
                </td>
              )
            }else{   
              return (
                <td key={columnIndex} className='px-6 py-4 text-md'>
            {row[column?.key]}
              </td>
            );
          }
          })}
        </tr>
      ))}
    </>
  );
};

export default TableBody;