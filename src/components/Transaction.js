import React from "react";

// It will receive data from it's parent TransactionList
function Transaction({date,description,category,amount}) {
  return (
    <tr>
      
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
