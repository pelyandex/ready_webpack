import { Handle, Position } from "react-flow-renderer";
import { createRef } from "react";

import { Dropdown, Icon, Menu } from "@shared/ui";

const menu = (
  <Menu
    items={[
      {
        label: "Run/rerun",
        key: "1"
      },
      {
        label: "Lock node",
        key: "2"
      },
      {
        label: "Set executable",
        key: "3"
      },
      {
        label: "Copy",
        key: "4"
      },
      {
        label: "Delete",
        key: "5"
      }
    ]}
  />
);

export function DataSource(data: any) {
  let color = "black";
  const {
    selected,
    data: { isRunning, isSuccess, isError }
  } = data;

  if (isSuccess) {
    color = "green";
  }
  if (isRunning) {
    color = "orange";
  }

  if (isError) {
    color = "red";
  }

  const ref = createRef<HTMLDivElement>();

  return (
    <>
      <Handle type="source" position={Position.Right} style={{ right: -10 }} />
      <Dropdown destroyPopupOnHide overlay={menu} trigger={["contextMenu"]}>
        <div
          ref={ref}
          onClick={e => e.stopPropagation()}
          style={{
            width: 80,
            height: 100,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: isError ? "red" : "black",
            outline: selected ? "1px dashed" : "none",
            padding: 5
          }}
        >
          <span style={{ fontSize: 10 }}>Data Source</span>
          <span style={{ fontSize: 8, color: "grey" }}>Spark</span>
          <span style={{ color: color }}>
            <Icon
              style={{
                marginTop: "10"
              }}
              width={25}
              height={25}
              icon="data_source"
              inherit
            />
          </span>
          <span style={{ fontSize: 5, marginTop: 10, textAlign: "center" }}>
            Provides source data such as dataframe or files
          </span>
        </div>
      </Dropdown>
    </>
  );
}
