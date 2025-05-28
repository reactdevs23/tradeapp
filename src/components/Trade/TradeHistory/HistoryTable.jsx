import React, { useMemo } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import SingleRow from "./SingleRow";

import classes from "./HistoryTable.module.css";

import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { Heading, IconButton, Text } from "@/components/common";
import { documentIcon } from "@/images";
import Overlay from "@/components/common/Overlay/Overlay";

const HistoryTable = ({ data = [] }) => {
  const columns = useMemo(
    () => [
      {
        header: "Type",
        accessorKey: "type",

        cell: ({ getValue }) => {
          const val = getValue();
          return (
            <span
              className={clsx(classes.type, {
                [classes.buy]: val.toLowerCase() === "buy",
                [classes.sell]: val.toLowerCase() === "sell",
              })}
            >
              {val}
            </span>
          );
        },
      },
      {
        header: "Pair",
        accessorKey: "pair",
        cell: ({ getValue }) => {
          const pair = getValue();
          return (
            <div className={classes.pair}>
              <div className={classes.coin}>
                <img
                  src={pair.from.logo}
                  alt={pair.from.symbol}
                  className={classes.logo}
                />
                <span className={classes.symbol}>{pair.from.symbol}</span>
              </div>
              <FaArrowRightLong className={classes.arrow} />
              <div className={classes.coin}>
                <img
                  src={pair.to.logo}
                  alt={pair.to.symbol}
                  className={classes.logo}
                />
                <span className={classes.symbol}>{pair.to.symbol}</span>
              </div>
            </div>
          );
        },
      },
      {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => {
          const amount = getValue();
          return (
            <Text sm medium className={classes.amount}>
              <span
                className={
                  amount?.from?.value >= 0 ? classes.positive : classes.negative
                }
              >
                {amount?.from?.value > 0 ? "+" : ""}
                {amount?.from?.value?.toFixed(2)} {amount.from.symbol}
              </span>{" "}
              <br />
              <span
                className={
                  amount?.to?.value >= 0 ? classes.positive : classes.negative
                }
              >
                {amount?.to?.value > 0 ? "+" : ""}
                {amount?.to?.value?.toFixed(2)} {amount.to.symbol}
              </span>
            </Text>
          );
        },
      },
      {
        header: "Time",
        accessorKey: "time",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => {
          const status = getValue();
          return (
            <span
              className={clsx(classes.status, {
                [classes.completed]: status.toLowerCase() === "completed",
                [classes.pending]: status.toLowerCase() === "pending",
                [classes.failed]: status.toLowerCase() === "failed",
              })}
            >
              {status}
            </span>
          );
        },
      },
      {
        header: "Network",
        accessorKey: "network",
        cell: ({ getValue }) => {
          const network = getValue();
          return (
            <div className={classes.network}>
              <img
                src={network.logo}
                alt={network.name}
                className={classes.networkLogo}
              />
            </div>
          );
        },
      },
      {
        header: "",
        accessorKey: "document",
        cell: (
          <IconButton className={classes.documentation} onClick={() => {}}>
            <img
              src={documentIcon}
              alt="Documentation"
              className={classes.documentIcon}
            />
          </IconButton>
        ),
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
    <div className={classes.tableContainer}>
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

export default HistoryTable;
