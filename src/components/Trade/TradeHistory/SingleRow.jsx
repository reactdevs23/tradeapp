import React from "react";
import { flexRender } from "@tanstack/react-table";
import classes from "./HistoryTable.module.css"; // style as needed
import { useNavigate } from "react-router-dom";

const SingleRow = ({ row }) => {
  const navigate = useNavigate();
  return (
    <tr
      className={classes.row}
      onClick={() => navigate("/trade-history-details")}
    >
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className={classes.cell}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default SingleRow;
