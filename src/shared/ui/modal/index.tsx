import type { ModalProps } from "antd";
import { Modal as AntdModal } from "antd";
import React, { FC } from "react";

import { Button } from "../button";

import s from "./styles.module.css";

interface IModalProps extends ModalProps {
  danger?: boolean;
}

export const Modal: FC<IModalProps> = props => {
  const Footer = [
    <Button
      key="save"
      danger={props.danger}
      onClick={props.onOk}
      size="large"
      type="primary"
    >
      {props.okText || "SAVE"}
    </Button>,
    <Button key="cancel" onClick={props.onCancel} size="large">
      {props.cancelText || "CANCEL"}
    </Button>
  ];

  return (
    <AntdModal
      centered
      className={s.modal}
      {...props}
      footer={props.footer || Footer}
    />
  );
};
