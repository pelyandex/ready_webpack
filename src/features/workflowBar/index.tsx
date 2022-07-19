import cn from "classnames";
import { observer } from "mobx-react-lite";

import {
  LeftOutlined,
  PlayCircleOutlined,
  StopOutlined
} from "@ant-design/icons";
import { useStore } from "@models/index";
import { Dropdown, Menu } from "@shared/ui";

import s from "./styles.module.css";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Save as"
      },
      {
        key: "2",
        label: "Download"
      },
      {
        key: "3",
        label: "Save as Template"
      },
      {
        key: "4",
        label: "Create snapshot"
      }
    ]}
  />
);

export const WorkflowBar = observer(() => {
  const { projectStatus, setProjectStatus } = useStore();

  const isRunning = projectStatus === "running";

  const onClick = () => {
    setProjectStatus(isRunning ? "stopped" : "running");
  };

  return (
    <header className={s.workflowBar}>
      <LeftOutlined />

      <Dropdown overlay={menu}>
        <span className={s.projectTitle}>
          Test_Workflow
          {/* <DownOutlined /> */}
        </span>
      </Dropdown>

      {isRunning ? (
        <StopOutlined className={cn(s.icon, s.off)} onClick={onClick} />
      ) : (
        <PlayCircleOutlined className={cn(s.icon, s.on)} onClick={onClick} />
      )}

      {/* <div className={s.project}>
        <LeftCircleOutlined />
         */}
      {/* 
        <Cascader
          expandTrigger="hover"
          className={s.projectMenu}
          options={[
            {
              value: "4",
              label: "Save as",
              children: [
                {
                  value: "File",
                  label: "File"
                },
                {
                  value: "Template",
                  label: "Template"
                },
                {
                  value: "Snapshot",
                  label: "Snapshot"
                }
              ]
            },
            {
              value: "5",
              label: "Download"
            },
            {
              value: "6",
              label: "Export to",
              disabled: true
            }
          ]}
        >
          <span id="menu_item" className={s.menuItem}>
            PROJECT
          </span>
        </Cascader>
        <span id="menu_item" className={s.menuItem}>
          SETTINGS
        </span>*/}
      {/* </div>
      <div className={s.title}>
        <span className={s.dropdownText} onClick={e => e.preventDefault()}>
          workflow_test&nbsp;&nbsp;&nbsp;
          {isRunning ? (
            <StopOutlined onClick={onClick} />
          ) : (
            <PlayCircleOutlined onClick={onClick} />
          )}
        </span> */}
      {/* </div> */}
    </header>
  );
});
