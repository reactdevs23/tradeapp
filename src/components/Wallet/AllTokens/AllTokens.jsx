import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classes from "./Alltokens.module.css";
import { bitCoinLogo, ethereumLogo, solanaLogo, usdtLogo } from "@/images";
import { Heading, Input, Text } from "@/components/common";

// Static data
const rawData = [
  {
    logo: usdtLogo,
    name: "Tether USDT",
    symbol: "USDT",
    tokenValue: 678.24,
    tokenAmount: 678.24,
    unitPrice: 1.0,
    change: null,
  },
  {
    logo: solanaLogo,
    name: "Solana",
    symbol: "SOL",
    tokenValue: 1441.42,
    tokenAmount: 8.24,
    unitPrice: 174.93,
    change: -6.34,
  },
  {
    logo: bitCoinLogo,
    name: "Bitcoin",
    symbol: "BTC",
    tokenValue: 143034.14,
    tokenAmount: 1.32,
    unitPrice: 108359.2,
    change: 1.0,
  },
  {
    logo: ethereumLogo,
    name: "Ethereum",
    symbol: "ETH",
    tokenValue: 8486.0,
    tokenAmount: 3.32,
    unitPrice: 3698.03,
    change: 1.2,
  },
];

const Alltokens = () => {
  const [searchValue, setSearchValue] = useState("");

  // Filtered data (case-insensitive by name or symbol)
  const filteredData = useMemo(() => {
    const query = searchValue.toLowerCase();
    return rawData.filter(
      ({ name, symbol }) =>
        name.toLowerCase().includes(query) ||
        symbol.toLowerCase().includes(query)
    );
  }, [searchValue]);

  // Column definitions
  const columns = useMemo(
    () => [
      {
        header: "Asset",
        accessorKey: "name",
        cell: ({ row }) => {
          const { logo, name, unitPrice, change } = row.original;
          return (
            <div className={classes.coinInfo}>
              <img src={logo} alt={name} className={classes.logo} />
              <div className={classes.nameAndAmount}>
                <Text medium primitive200 className={classes.name}>
                  {name}
                </Text>
                <Text primitive500 lxs medium className={classes.amount}>
                  ${unitPrice.toFixed(2)}{" "}
                  {change !== null ? (
                    <span
                      className={
                        change >= 0 ? classes.positive : classes.negative
                      }
                      style={{ marginLeft: 8 }}
                    >
                      {change > 0 ? "+" : ""}
                      {change.toFixed(2)}%
                    </span>
                  ) : (
                    "-"
                  )}
                </Text>
              </div>
            </div>
          );
        },
      },
      {
        header: "Value",
        accessorKey: "tokenValue",
        cell: ({ row }) => {
          const { tokenValue, tokenAmount, symbol } = row.original;
          return (
            <div className={classes.value}>
              <Text primitive200 medium base textRight>
                ${tokenValue.toLocaleString()}
              </Text>
              <Text primitive500 medium lxs textRight>
                {tokenAmount} {symbol}
              </Text>
            </div>
          );
        },
      },
    ],
    []
  );

  // React Table setup
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={classes.tableContainer}>
      <div className={classes.header}>
        <Heading base primitive0 className={classes.heading}>
          All Tokens
        </Heading>
        <Input
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search tokens"
          className={classes.input}
        />
      </div>

      <table className={classes.table}>
        <tbody>
          {table?.getRowModel()?.rows?.map((row) => (
            <tr key={row.id} className={classes.row}>
              {row?.getVisibleCells()?.map((cell) => (
                <td key={cell.id} className={classes.cell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alltokens;
