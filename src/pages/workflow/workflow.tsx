import { ReactFlowProvider } from "react-flow-renderer";

import { Workflow } from "@features/workflow";
import { WorkflowBar } from "@features/workflowBar";

import s from "./style.module.css";

export const WorkFlowPage = () => {
  return (
    <>
      <WorkflowBar />
      <main className={s.main}>
        <ReactFlowProvider>
          <Workflow />
        </ReactFlowProvider>
      </main>
    </>
  );
};
