import { useState } from "react";
import { Handle, Position } from "react-flow-renderer";

import { Dropdown, Icon, Menu } from "@shared/ui";

import { JupiterModal } from "./JupiterModal";

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
  const [editorVisible, setEditorVisible] = useState(false);

  let color = "black";

  const {
    selected,
    data: { isRunning, isSuccess, isError, value }
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

  const openEditor = () => {
    setEditorVisible(!editorVisible);
  };

  return (
    <>
      <Handle type="source" position={Position.Right} style={{ right: -10 }} />
      <Handle type="target" position={Position.Left} style={{ right: -10 }} />

      <div onDoubleClick={openEditor} onContextMenu={e => e.stopPropagation()}>
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <div
            style={{
              width: 80,
              height: 100,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: isError ? "red" : "black",
              outline: selected ? "1px dashed" : "none",
              padding: 2
            }}
          >
            <span style={{ fontSize: 8 }}>Jupiter notebook</span>
            <span style={{ fontSize: 6, color: "grey" }}>Docker</span>
            <span style={{ color }}>
              <Icon
                style={{ marginTop: "10" }}
                width={25}
                height={25}
                icon="shape_other"
                inherit
              />
            </span>
            <span style={{ fontSize: 5, marginTop: 10, textAlign: "center" }}>
              Run custom python code
            </span>
          </div>
        </Dropdown>
        <JupiterModal visible={editorVisible} onChangeVisible={openEditor} />
      </div>
    </>
  );
}
