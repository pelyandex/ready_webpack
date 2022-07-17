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

export function Jupiter(data: any) {
  let color = "black";
  const { isRunning, isSuccess, isError } = data.data;

  if (isSuccess) {
    color = "green";
  }
  if (isRunning) {
    color = "orange";
  }

  if (isError) {
    color = "red";
  }

  return (
    <>
      <Handle type="source" position={Position.Right} style={{ right: -10 }} />
      <Handle type="target" position={Position.Left} style={{ right: -10 }} />

      <div onContextMenu={e => e.stopPropagation()}>
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <div
            style={{
              width: 80,
              height: 100,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: isError ? "red" : "black"
            }}
          >
            <span style={{ fontSize: 10 }}>Jupiter notebook</span>
            <span style={{ fontSize: 8, color: "grey" }}>Docker</span>
            <span style={{ color: color }}>
              <Icon
                style={{ marginTop: "10" }}
                width={25}
                height={25}
                icon="shape_other"
                inherit
              />
            </span>
            <span style={{ fontSize: 7, marginTop: 10, textAlign: "center" }}>
            Run custom python code
            </span>
          </div>
        </Dropdown>
      </div>
    </>
  );
}
