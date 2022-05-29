import React, { FC } from "react";
import { Modal as AntdModal } from "antd";

import s from "./styles.module.css";
import { Button } from "../button";

import type { ModalProps } from "antd";

interface IModalProps extends ModalProps {
  danger?: boolean;
}

export const Modal: FC<IModalProps> = props => {
  const Footer = [
    <Button
      danger={props.danger}
      onClick={props.onOk}
      size="large"
      key="save"
      type="primary"
    >
      {props.okText || "SAVE"}
    </Button>,
    <Button onClick={props.onCancel} size="large" key="cancel">
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
