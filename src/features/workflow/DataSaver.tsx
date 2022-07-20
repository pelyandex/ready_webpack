import { Handle, Position } from "react-flow-renderer";

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

export function DataSaver() {
  return (
    <>
      <Handle type="target" position={Position.Left} style={{ right: -10 }} />
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <div
          style={{
            width: 80,
            height: 100,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <span style={{ fontSize: 8 }}>Data Saver</span>
          <span style={{ fontSize: 6, color: "grey" }}>Spark</span>
          <Icon
            style={{ marginTop: "10" }}
            width={25}
            height={25}
            icon="data_source"
            inherit
          />
          <span style={{ fontSize: 7, marginTop: 10, textAlign: "center" }}>
            Exports dataframe to selected database table
          </span>
        </div>
      </Dropdown>
    </>
  );
}
