import type { ButtonProps } from "antd";
import { Button as AntdButton } from "antd";
import type { FC } from "react";

import s from "./styles.module.css";

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <AntdButton className={s.button} {...props} />;
};
