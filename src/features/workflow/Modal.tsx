import { useState } from "react";

import { Icon, Input, Modal } from "@shared/ui";

import s from "./modal.module.css";

const modules = [
  {
    type: "saver",
    name: "Data Source",
    description: "Provides source data such as dataframe or files",
    icon: (
      <Icon
        style={{
          marginTop: "10"
        }}
        width={55}
        height={55}
        icon="data_source"
        inherit
      />
    )
  },
  {
    type: "saver",
    name: "Data Saver",
    description: "Exports dataframe to selected database table",
    icon: (
      <Icon
        style={{
          marginTop: "10"
        }}
        width={55}
        height={55}
        icon="data_source"
        inherit
      />
    )
  },
  {
    type: "script",
    name: "Jupiter",
    description: "Run custom python code",
    icon: (
      <Icon
        style={{
          marginTop: "10"
        }}
        width={55}
        height={55}
        icon="shape_other"
        inherit
      />
    )
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
            fontWeight: directory === "saver" ? "bold" : "normal",
            marginTop: 20,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            width: "70%"
          }}
        >
          <span>Хранение данных</span>
          <span>2</span>
        </div>
        <div
          onClick={() => setDirectory(directory === "script" ? "" : "script")}
          style={{
            fontWeight: directory === "script" ? "bold" : "normal",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            width: "70%"
          }}
        >
          <span>Скрипты</span>
          <span>1</span>
        </div>
      </div>
      <div className={s.field}>
        {filteredModules.map(el => {
          return (
            <div onClick={setVisible} key={el.name} className={s.card}>
              <span>{el.name}</span>
              {el.icon}
              <span>{el.description}</span>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};
