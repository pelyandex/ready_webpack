import { Button as AntdButton } from "antd";

import s from "./styles.module.css";

import type { FC } from "react";
import type { ButtonProps } from "antd";

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <AntdButton className={s.button} {...props} />;
};
