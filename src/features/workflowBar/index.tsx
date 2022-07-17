import {
  LeftCircleOutlined,
  PlayCircleOutlined,
  StopOutlined
} from "@ant-design/icons";
import { Cascader } from "antd";
import { observer } from "mobx-react-lite";

import { useStore } from "@models/index";

import s from "./styles.module.css";

export const WorkflowBar = observer(() => {
  const { projectStatus, setProjectStatus } = useStore();

  const isRunning = projectStatus === "running";

  const onClick = () => {
    setProjectStatus(isRunning ? "stopped" : "running");
  };

  return (
    <header className={s.workflowBar}>
      <div className={s.project}>
        <LeftCircleOutlined />

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
          <span className={s.menuItem}>PROJECT</span>
        </Cascader>
        <span className={s.menuItem}>SETTINGS</span>
      </div>
      <div className={s.title}>
        <span className={s.dropdownText} onClick={e => e.preventDefault()}>
          workflow_test&nbsp;&nbsp;&nbsp;
          {isRunning ? (
            <StopOutlined onClick={onClick} />
          ) : (
            <PlayCircleOutlined onClick={onClick} />
          )}
        </span>
      </div>
    </header>
  );
});
