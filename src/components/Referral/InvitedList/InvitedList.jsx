import React, { useMemo } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import SingleRow from "./SingleRow";

import classes from "./InvitedList.module.css";

import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { Heading, IconButton, Text } from "@/components/common";
import { documentIcon } from "@/images";
import Overlay from "@/components/common/Overlay/Overlay";

const InvitedList = ({ data = [] }) => {
  const columns = useMemo(
    () => [
      {
        header: "Friend",
        accessorKey: "friend",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => {
          const status = getValue();
          const lowerStatus = status?.toLowerCase();

          return (
            <span
              className={clsx(classes.status, {
                [classes.completed]: lowerStatus === "completed",
                [classes.pending]: lowerStatus === "pending action",
                [classes.tradePending]: lowerStatus === "first trade pending",
                [classes.incomplete]: lowerStatus === "incomplete",
              })}
            >
              {status}
            </span>
          );
        },
      },

      {
        header: "Reward",
        accessorKey: "reward",
      },
      {
        header: "Joined",
        accessorKey: "joined",
      },
    ],
    []
  );

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={clsx(classes.tableContainer)}>
      <div className={clsx(classes.tableWrapper)}>
        {data.length > 0 ? (
          <table className={classes.table}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className={classes.headerRow}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className={classes.headerCell}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <SingleRow key={row.id} row={row} />
              ))}
            </tbody>
          </table>
        ) : (
          <Heading lg primitive400 medium textCenter className={classes.noData}>
            There is no such data
          </Heading>
        )}
      </div>
      <Overlay type2 />
    </div>
  );
};

export default InvitedList;
