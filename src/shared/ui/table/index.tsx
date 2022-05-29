import { Table as AntdTable } from "antd";

import { Actions } from "./actions";
import s from "./styles.module.css";
import { Loading } from "../loading";

import type { TableProps } from "antd";
import type { FC } from "react";

interface ITableProps extends FC<TableProps<any>> {
  Actions: typeof Actions;
}

export const Table: ITableProps = props => {
  if (props.loading) {
    return <Loading />;
  }
  return <AntdTable className={s.table} {...props} />;
};

Table.Actions = Actions;
