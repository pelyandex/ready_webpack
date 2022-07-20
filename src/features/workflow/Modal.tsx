import { useState } from "react";

import { Input, Modal } from "@shared/ui";

import s from "./modal.module.css";

const modules = [
  {
    type: "saver",
    name: "Data Source",
    description: "Provides source data such as dataframe or files",
    ports: [{ name: "OUT_0", description: "Output dataframe" }]
  },
  {
    type: "saver",
    name: "Data Saver",
    description: "Exports dataframe to selected database table",
    ports: [{ name: "IN_0", description: "Input dataframe" }]
  },
  {
    type: "script",
    name: "Jupiter",
    description: "Run custom python code"
  }
];

export const ModalWorkflow = ({ visible, setVisible }: any) => {
  const [directory, setDirectory] = useState("");
  const [filter, setFilter] = useState("");

  const filteredModules = modules.filter(
    el =>
      new RegExp(filter, "i").test(el.name) &&
      new RegExp(directory, "i").test(el.type)
  );

  return (
    <Modal
      bodyStyle={{ height: "80vh", background: "rgba(236, 236, 236, .3)" }}
      destroyOnClose
      className={s.modal}
      centered
      onCancel={setVisible}
      visible={visible}
      width={1000}
      footer={" "}
    >
      <div className={s.library}>
        <h3>Module library</h3>
        <Input
          placeholder="Search module"
          onChange={e => setFilter(e.target.value)}
        />
        <div
          onClick={() => setDirectory(directory === "saver" ? "" : "saver")}
          style={{
            color: directory === "saver" ? "rgba(48, 202, 16, 0.8)" : "black",
            marginTop: 20,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            width: "70%"
          }}
        >
          <span>Data processing</span>
          <span>2</span>
        </div>
        <div
          onClick={() => setDirectory(directory === "script" ? "" : "script")}
          style={{
            color: directory == "script" ? "rgba(48, 202, 16, 8)" : "black",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            width: "70%"
          }}
        >
          <span>Scripts</span>
          <span>1</span>
        </div>
      </div>
      <div className={s.field}>
        {filteredModules.map(el => {
          return (
            <div key={el.name} onClick={setVisible} className={s.card}>
              <div>
                <div className={s.name}>{el.name}</div>
                <div className={s.description}>{el.description}</div>
              </div>

              {el.ports && (
                <div className={s.ports}>
                  <h4>Ports:</h4>
                  {el.ports.map(el => (
                    <div key={el.name}>
                      <span style={{ color: "gray" }}>{el.name}:</span>
                      &nbsp;&nbsp;&nbsp;
                      <span>{el.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};
