import React from "react";
import { flexRender } from "@tanstack/react-table";
import classes from "./HistoryTable.module.css"; // style as needed

const SingleRow = ({ row }) => {
  return (
    <tr className={classes.row}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className={classes.cell}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default SingleRow;
